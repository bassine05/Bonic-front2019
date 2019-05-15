import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddextensionsComponent } from './addextensions.component';

describe('AddextensionsComponent', () => {
  let component: AddextensionsComponent;
  let fixture: ComponentFixture<AddextensionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddextensionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddextensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
