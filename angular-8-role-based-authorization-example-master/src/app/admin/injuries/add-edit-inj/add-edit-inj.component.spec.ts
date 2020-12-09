import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInjComponent } from './add-edit-inj.component';

describe('AddEditInjComponent', () => {
  let component: AddEditInjComponent;
  let fixture: ComponentFixture<AddEditInjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditInjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
