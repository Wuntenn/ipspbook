import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { RxStompService } from '@services/rxStomp/rxStomp.service';
import { IMessage } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import { InplayEvent, InplayEventId } from '@app/SportsBookIntefaces'

@Injectable({
  providedIn: 'root'
})
export class SbliveService {
  constructor(private rxStompService: RxStompService) {
  }

  getInplayEvents(): Observable<IMessage> {
    return this.rxStompService.watch('/topic/inplay');
  }

  getEventDetails(eventId: number): Observable<IMessage> {
    const eventTopic = `/topic/event/${eventId}`;
    return this.rxStompService.watch(eventTopic);
  }

  getMarketDetails(marketId: number): Observable<IMessage> {
    const marketTopic = `/topic/market/${marketId}`;
    return this.rxStompService.watch(marketTopic);
  }
}
