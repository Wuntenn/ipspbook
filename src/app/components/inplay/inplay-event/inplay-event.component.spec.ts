import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InplayEventComponent } from './inplay-event.component';

describe('InplayEventComponent', () => {
  let component: InplayEventComponent;
  let fixture: ComponentFixture<InplayEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InplayEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InplayEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
