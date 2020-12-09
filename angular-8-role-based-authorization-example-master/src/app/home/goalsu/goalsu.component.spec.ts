import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsuComponent } from './goalsu.component';

describe('GoalsuComponent', () => {
  let component: GoalsuComponent;
  let fixture: ComponentFixture<GoalsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
