import { Component, OnInit, Input } from '@angular/core';
import { InplayMarket } from '@app/SportsBookIntefaces';

@Component({
  selector: 'app-market-event',
  templateUrl: './market-event.component.html',
  styleUrls: ['./market-event.component.sass']
})
export class MarketEventComponent implements OnInit {
  @Input() inplayMarket?: InplayMarket;
  constructor() { }

  ngOnInit(): void {
  }

}
