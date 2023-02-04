import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SbliveService {
  private inplaySubject: WebSocketSubject<any>;
  //private inplaySubject: WebSocketSubject<any>;

  //private sportsbookUrl: string = 'http://ec2-18-130-236-146.eu-west-2.compute.amazonaws.com:8080/sportsbook/';
  private sportsbookUrl: string = 'ws://localhost:4200/websocket';

  constructor() {
    /*
    this.inplaySubject = webSocket({
      url: this.sportsbookUrl,
      protocol: 'websocket'
    });
    */

    this.inplaySubject = webSocket('ws://localhost:4200/websocket');
  }

  getInplaySubject(): WebSocketSubject<any> {
    return this.inplaySubject;
  }
}
