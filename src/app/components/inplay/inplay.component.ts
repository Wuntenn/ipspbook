import { Component, OnInit } from '@angular/core';
import { SbliveService } from 'src/app/services/sblive.service';
import { Observable } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { RxStompService } from '@services/rxStomp/rxStomp.service';

@Component({
  selector: 'app-inplay',
  templateUrl: './inplay.component.html',
  styleUrls: ['./inplay.component.sass']
})
export class InplayComponent implements OnInit {
  constructor(
    private sbService: SbliveService,
    private rxStompService: RxStompService
  ) { 
    // subscribe to the even
    this.sbService.getInplaySubject().subscribe({
      next: msg => { console.log('Sportsbook msg: ', msg)},
      error: msg => console.log('Sportsbook msg: ', msg),
      complete: () => console.log('Sportsbook msg: ')
    });

    this.rxStompService.watch('topic/inplay').subscribe({
      next: msg => { console.log('Sportsbook msg: ', msg)},
      error: msg => console.log('Sportsbook msg: ', msg),
      complete: () => console.log('Sportsbook msg: ')
    });

  }

  ngOnInit(): void {
  }

}
