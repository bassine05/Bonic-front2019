import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermesReservesComponent } from './termes-reserves.component';

describe('TermesReservesComponent', () => {
  let component: TermesReservesComponent;
  let fixture: ComponentFixture<TermesReservesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermesReservesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermesReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
