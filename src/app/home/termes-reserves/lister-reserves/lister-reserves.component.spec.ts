import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerReservesComponent } from './lister-reserves.component';

describe('ListerReservesComponent', () => {
  let component: ListerReservesComponent;
  let fixture: ComponentFixture<ListerReservesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerReservesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
