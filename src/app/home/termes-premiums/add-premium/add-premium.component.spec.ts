import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPremiumComponent } from './add-premium.component';

describe('AddPremiumComponent', () => {
  let component: AddPremiumComponent;
  let fixture: ComponentFixture<AddPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
