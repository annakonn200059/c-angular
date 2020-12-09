import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditExpUComponent } from './add-edit-exp-u.component';

describe('AddEditExpUComponent', () => {
  let component: AddEditExpUComponent;
  let fixture: ComponentFixture<AddEditExpUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditExpUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditExpUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
