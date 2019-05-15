import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterextensionsComponent } from './consulterextensions.component';

describe('ConsulterextensionsComponent', () => {
  let component: ConsulterextensionsComponent;
  let fixture: ComponentFixture<ConsulterextensionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterextensionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterextensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
