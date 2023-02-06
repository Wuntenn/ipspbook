import { Component, OnInit, Input, Output } from '@angular/core';
import { InplayEvent } from '@app/SportsBookIntefaces'

@Component({
  selector: 'app-inplay-event',
  templateUrl: './inplay-event.component.html',
  styleUrls: ['./inplay-event.component.sass']
})
export class InplayEventComponent implements OnInit {
  @Input() eventId?: InplayEvent['id'];
  @Input() homeTeam?: InplayEvent['hometeam'];
  @Input() awayTeam?: InplayEvent['awayteam'];
  @Input() homeScore?: InplayEvent['homescore'];
  @Input() awayScore?: InplayEvent['awayscore'];

  constructor() { }

  ngOnInit(): void {
  }

}
