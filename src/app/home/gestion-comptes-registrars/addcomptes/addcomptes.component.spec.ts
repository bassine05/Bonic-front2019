import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomptesComponent } from './addcomptes.component';

describe('AddcomptesComponent', () => {
  let component: AddcomptesComponent;
  let fixture: ComponentFixture<AddcomptesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcomptesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcomptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
