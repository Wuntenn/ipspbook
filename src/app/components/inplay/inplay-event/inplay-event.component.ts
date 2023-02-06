import { Component, OnInit, Input, Output } from '@angular/core';
import { InplayEvent } from '@app/SportsBookIntefaces'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inplay-event',
  templateUrl: './inplay-event.component.html',
  styleUrls: ['./inplay-event.component.sass']
})
export class InplayEventComponent implements OnInit {
  @Input() inplayEvent?: InplayEvent;

  constructor() { }

  ngOnInit(): void {
  }

}
