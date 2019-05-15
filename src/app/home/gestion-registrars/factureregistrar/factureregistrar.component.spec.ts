import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureregistrarComponent } from './factureregistrar.component';

describe('FactureregistrarComponent', () => {
  let component: FactureregistrarComponent;
  let fixture: ComponentFixture<FactureregistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureregistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureregistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
