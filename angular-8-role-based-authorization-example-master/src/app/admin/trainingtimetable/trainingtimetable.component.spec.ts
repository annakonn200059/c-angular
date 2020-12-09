import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingtimetableComponent } from './trainingtimetable.component';

describe('TrainingtimetableComponent', () => {
  let component: TrainingtimetableComponent;
  let fixture: ComponentFixture<TrainingtimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingtimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingtimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
