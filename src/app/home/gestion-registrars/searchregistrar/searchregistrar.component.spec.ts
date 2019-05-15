import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchregistrarComponent } from './searchregistrar.component';

describe('SearchregistrarComponent', () => {
  let component: SearchregistrarComponent;
  let fixture: ComponentFixture<SearchregistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchregistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchregistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
