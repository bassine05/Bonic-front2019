import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeregistrarsComponent } from './listeregistrars.component';

describe('ListeregistrarsComponent', () => {
  let component: ListeregistrarsComponent;
  let fixture: ComponentFixture<ListeregistrarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeregistrarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeregistrarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
