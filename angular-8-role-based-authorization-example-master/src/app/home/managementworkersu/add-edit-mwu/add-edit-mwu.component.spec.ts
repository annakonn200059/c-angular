import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMwuComponent } from './add-edit-mwu.component';

describe('AddEditMwuComponent', () => {
  let component: AddEditMwuComponent;
  let fixture: ComponentFixture<AddEditMwuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditMwuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMwuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
