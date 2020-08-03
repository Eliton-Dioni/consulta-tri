import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryMinibusComponent } from './itinerary-minibus.component';

describe('ItineraryMinibusComponent', () => {
  let component: ItineraryMinibusComponent;
  let fixture: ComponentFixture<ItineraryMinibusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItineraryMinibusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryMinibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
