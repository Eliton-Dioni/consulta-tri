import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryBusComponent } from './itinerary-bus.component';

describe('ItineraryBusComponent', () => {
  let component: ItineraryBusComponent;
  let fixture: ComponentFixture<ItineraryBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItineraryBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
