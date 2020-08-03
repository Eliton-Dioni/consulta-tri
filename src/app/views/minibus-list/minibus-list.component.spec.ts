import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinibusListComponent } from './minibus-list.component';

describe('MinibusListComponent', () => {
  let component: MinibusListComponent;
  let fixture: ComponentFixture<MinibusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinibusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinibusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
