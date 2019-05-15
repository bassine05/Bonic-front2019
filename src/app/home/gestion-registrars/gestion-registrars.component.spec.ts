import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRegistrarsComponent } from './gestion-registrars.component';

describe('GestionRegistrarsComponent', () => {
  let component: GestionRegistrarsComponent;
  let fixture: ComponentFixture<GestionRegistrarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionRegistrarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionRegistrarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
