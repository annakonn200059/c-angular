import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditWorkuComponent } from './add-edit-worku.component';

describe('AddEditWorkuComponent', () => {
  let component: AddEditWorkuComponent;
  let fixture: ComponentFixture<AddEditWorkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditWorkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditWorkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
