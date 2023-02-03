import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SbliveService {
  //private inplaySubject: WebSocketSubject<any> = new WebSocketSubject('undefined');
  private inplaySubject: WebSocketSubject<any>;
  private sportsbookUrl: string = 'ws://ec2-18-130-236-146.eu-west-2.compute.amazonaws.com:8080/sportsbook';

  constructor() {
    this.inplaySubject = webSocket(this.sportsbookUrl);
  }

  getInplaySubject(): WebSocketSubject<any> {
    return this.inplaySubject;
  }
}
