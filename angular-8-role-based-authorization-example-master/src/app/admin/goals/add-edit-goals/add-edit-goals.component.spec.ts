import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGoalsComponent } from './add-edit-goals.component';

describe('AddEditGoalsComponent', () => {
  let component: AddEditGoalsComponent;
  let fixture: ComponentFixture<AddEditGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
