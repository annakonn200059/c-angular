import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGoalsuComponent } from './add-edit-goalsu.component';

describe('AddEditGoalsuComponent', () => {
  let component: AddEditGoalsuComponent;
  let fixture: ComponentFixture<AddEditGoalsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditGoalsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGoalsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
