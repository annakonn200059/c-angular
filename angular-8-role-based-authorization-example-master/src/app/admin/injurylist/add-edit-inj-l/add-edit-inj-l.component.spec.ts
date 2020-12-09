import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInjLComponent } from './add-edit-inj-l.component';

describe('AddEditInjLComponent', () => {
  let component: AddEditInjLComponent;
  let fixture: ComponentFixture<AddEditInjLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditInjLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInjLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
