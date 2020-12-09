import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTeamuComponent } from './add-edit-teamu.component';

describe('AddEditTeamuComponent', () => {
  let component: AddEditTeamuComponent;
  let fixture: ComponentFixture<AddEditTeamuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTeamuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTeamuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
