import { Component, OnInit } from '@angular/core';
import { SbliveService } from 'src/app/services/sblive.service';
import { Observable } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-inplay',
  templateUrl: './inplay.component.html',
  styleUrls: ['./inplay.component.sass']
})
export class InplayComponent implements OnInit {
  private inplayEvent: WebSocketSubject<any>;

  //constructor() { }
  
  constructor(private sbService: SbliveService) { 
    this.inplayEvent = sbService.getInplaySubject();

    // subscribe to the event
    this.inplayEvent.asObservable().subscribe({
      next: msg => { console.log('Sportsbook msg: ', msg)},
      error: msg => console.warn('Sportsbook msg: ', msg),
      complete: () => console.log('Sportsbook msg: ')
    });
  }

  ngOnInit(): void {
  }

}
