import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerdemandesComponent } from './listerdemandes.component';

describe('ListerdemandesComponent', () => {
  let component: ListerdemandesComponent;
  let fixture: ComponentFixture<ListerdemandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerdemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerdemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
