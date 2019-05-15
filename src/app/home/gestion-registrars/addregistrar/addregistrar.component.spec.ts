import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddregistrarComponent } from './addregistrar.component';

describe('AddregistrarComponent', () => {
  let component: AddregistrarComponent;
  let fixture: ComponentFixture<AddregistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddregistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddregistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
