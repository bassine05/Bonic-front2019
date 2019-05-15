import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerPremiumsComponent } from './lister-premiums.component';

describe('ListerPremiumsComponent', () => {
  let component: ListerPremiumsComponent;
  let fixture: ComponentFixture<ListerPremiumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerPremiumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerPremiumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
