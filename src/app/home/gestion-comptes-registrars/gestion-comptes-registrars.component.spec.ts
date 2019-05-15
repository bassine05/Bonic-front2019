import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionComptesRegistrarsComponent } from './gestion-comptes-registrars.component';

describe('GestionComptesRegistrarsComponent', () => {
  let component: GestionComptesRegistrarsComponent;
  let fixture: ComponentFixture<GestionComptesRegistrarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionComptesRegistrarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionComptesRegistrarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
