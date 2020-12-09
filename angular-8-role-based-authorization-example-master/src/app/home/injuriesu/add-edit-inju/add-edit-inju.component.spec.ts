import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInjuComponent } from './add-edit-inju.component';

describe('AddEditInjuComponent', () => {
  let component: AddEditInjuComponent;
  let fixture: ComponentFixture<AddEditInjuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditInjuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
