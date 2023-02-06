import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SbliveService } from '@app/services/sblive.service';
import { InplayMarket } from '@app/SportsBookIntefaces';
import { mainModule } from 'process';
import { Observable, map, switchMap} from 'rxjs';
import { IMessage } from '@stomp/stompjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.sass']
})
export class MarketComponent implements OnInit {
  market$ : Observable<IMessage> = new Observable();
  private markets: Subscription = new Subscription();

  constructor(
    private sbliveService: SbliveService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.markets = this.route.paramMap.pipe(map(params => {
      return this.sbliveService.getMarketDetails(Number(params.get('marketId')));
    }))
    .pipe(
      switchMap(msg => msg) 
    )
    .subscribe({
      next: msg => console.log('Market msg: ', msg),
      error: msg => console.log('Market msg: ', msg),
      complete: () => console.log('Market msg: ')
    });
    

  }

}
