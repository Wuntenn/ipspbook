import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketEventComponent } from './market-event.component';

describe('MarketEventComponent', () => {
  let component: MarketEventComponent;
  let fixture: ComponentFixture<MarketEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
