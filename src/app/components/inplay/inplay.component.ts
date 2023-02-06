import { Component, OnInit, OnDestroy } from '@angular/core';
import { SbliveService } from 'src/app/services/sblive.service';
import { concat, concatAll, mergeMap, Observable, Subscription, switchMap, from, forkJoin, Subject, toArray, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { WebSocketSubject } from 'rxjs/webSocket';
import { IMessage } from '@stomp/stompjs';
import { InplayEventId, InplayEvent } from '@app/SportsBookIntefaces'

@Component({
  selector: 'app-inplay',
  templateUrl: './inplay.component.html',
  styleUrls: ['./inplay.component.sass']
})
export class InplayComponent implements OnInit {
  private inplayEventIds: InplayEventId[] = []; 
  private inplayEventDetails$: Observable<IMessage>[] = [];
  public inplayEventDetailObj: InplayEvent[] = [];
  public inplayEventsDetailsSubscription: Subscription[] = []; 
  private inplayTopic: Subscription;


  constructor(private sbLiveService: SbliveService) { 
    // get back array of currently live event id's using
    // switchmap to reset previous each time
    this.inplayTopic = this.sbLiveService.getInplayEvents()
      .pipe(
        switchMap(msg => of(JSON.parse(msg.body))),
      )
      .subscribe({
        next: msg => {
          console.log('Sportsbook inplay event ids: ', msg);

          // Set array of current event Ids 
          this.inplayEventIds = msg as InplayEventId[];

          // Update the array of event details
          this.updateInplayEvents();
        },
        error: msg => console.log('Sportsbook msg: ', msg),
        complete: () => console.log('Sportsbook msg: ')
      });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.inplayTopic.unsubscribe();
  }

  // Add new event subscription
  updateInplayEvents() {
    this.inplayEventIds.forEach((id: any, idx: number)=> {
      // reference to the details observable
      this.inplayEventDetails$[idx] = this.sbLiveService.getEventDetails(idx);

      // get all current event Id's
      const EvIds = this.inplayEventIds.map(ev => ev.id);
      
      let subscription = this.inplayEventDetails$[idx]
      //.pipe(filter(ipEv => EvIds.includes(ipEv.body.id)))
      .subscribe({
        next: msg => {
          let curEl:InplayEvent = JSON.parse(msg.body);
          console.log('Events msg: ', curEl);

          const isExists = this.inplayEventDetailObj.filter(el => el.id === curEl.id).length > 0;
          if(!isExists) {
            this.inplayEventDetailObj.push(curEl as InplayEvent)
            this.inplayEventDetailObj = this.inplayEventDetailObj.filter(ipEv => EvIds.includes(ipEv.id));
          }
        },
        error: msg => console.log('Events msg: ', msg.body),
        complete: () => console.log('Events msg: ')
      });

      this.inplayEventsDetailsSubscription[idx] = subscription;

      // bundle the subscriptions to the root one so that we can teardown all the subs in one go 
      if (idx > 0) this.inplayEventsDetailsSubscription[0].add(subscription);
    });
  }

  // Clear all event subscriptions
  clearEventDetailSubscription() {
    this.inplayEventsDetailsSubscription[0].unsubscribe();
  }
}
