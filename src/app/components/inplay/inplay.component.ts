import { Component, OnInit } from '@angular/core';
import { SbliveService } from 'src/app/services/sblive.service';
import { Observable } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Message } from '@stomp/stompjs';

@Component({
  selector: 'app-inplay',
  templateUrl: './inplay.component.html',
  styleUrls: ['./inplay.component.sass']
})
export class InplayComponent implements OnInit {
  constructor(private sbLiveService: SbliveService) { 

    this.sbLiveService.getInplayEvents()
      .subscribe({
        next: msg => console.log('Sportsbook msg: ', msg),
        error: msg => console.log('Sportsbook msg: ', msg),
        complete: () => console.log('Sportsbook msg: ')
      });
  
    this.sbLiveService.getEventDetails('1')
      .subscribe({
        next: msg => console.log('Events msg: ', msg),
        error: msg => console.log('Events msg: ', msg),
        complete: () => console.log('Events msg: ')
      });
    
    this.sbLiveService.getMarketDetails('101')
      .subscribe({
        next: msg => console.log('Market msg: ', msg),
        error: msg => console.log('Market msg: ', msg),
        complete: () => console.log('Market msg: ')
      });
 
  }

  ngOnInit(): void {
  }

}
