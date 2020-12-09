import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPlayuComponent } from './add-edit-playu.component';

describe('AddEditPlayuComponent', () => {
  let component: AddEditPlayuComponent;
  let fixture: ComponentFixture<AddEditPlayuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPlayuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPlayuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
