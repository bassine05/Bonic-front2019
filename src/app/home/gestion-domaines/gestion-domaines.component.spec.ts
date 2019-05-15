import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDomainesComponent } from './gestion-domaines.component';

describe('GestionDomainesComponent', () => {
  let component: GestionDomainesComponent;
  let fixture: ComponentFixture<GestionDomainesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDomainesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDomainesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
