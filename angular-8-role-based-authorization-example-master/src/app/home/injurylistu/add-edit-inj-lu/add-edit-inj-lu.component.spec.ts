import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInjLuComponent } from './add-edit-inj-lu.component';

describe('AddEditInjLuComponent', () => {
  let component: AddEditInjLuComponent;
  let fixture: ComponentFixture<AddEditInjLuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditInjLuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInjLuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
