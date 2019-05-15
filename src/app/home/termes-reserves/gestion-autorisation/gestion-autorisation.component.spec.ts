import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAutorisationComponent } from './gestion-autorisation.component';

describe('GestionAutorisationComponent', () => {
  let component: GestionAutorisationComponent;
  let fixture: ComponentFixture<GestionAutorisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAutorisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAutorisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
