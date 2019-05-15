import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermesPremiumsComponent } from './termes-premiums.component';

describe('TermesPremiumsComponent', () => {
  let component: TermesPremiumsComponent;
  let fixture: ComponentFixture<TermesPremiumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermesPremiumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermesPremiumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
