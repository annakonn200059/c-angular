import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTttComponent } from './add-edit-ttt.component';

describe('AddEditTttComponent', () => {
  let component: AddEditTttComponent;
  let fixture: ComponentFixture<AddEditTttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
