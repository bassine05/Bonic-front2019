import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTarificationComponent } from './gestion-tarification.component';

describe('GestionTarificationComponent', () => {
  let component: GestionTarificationComponent;
  let fixture: ComponentFixture<GestionTarificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionTarificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
