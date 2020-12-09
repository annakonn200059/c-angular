import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGoalsuComponent } from './show-goalsu.component';

describe('ShowGoalsuComponent', () => {
  let component: ShowGoalsuComponent;
  let fixture: ComponentFixture<ShowGoalsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGoalsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGoalsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
