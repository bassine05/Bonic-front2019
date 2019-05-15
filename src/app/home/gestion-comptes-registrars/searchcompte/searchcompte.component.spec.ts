import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcompteComponent } from './searchcompte.component';

describe('SearchcompteComponent', () => {
  let component: SearchcompteComponent;
  let fixture: ComponentFixture<SearchcompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
