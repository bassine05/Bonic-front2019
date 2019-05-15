import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListertagsComponent } from './listertags.component';

describe('ListertagsComponent', () => {
  let component: ListertagsComponent;
  let fixture: ComponentFixture<ListertagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListertagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListertagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
