import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSttComponent } from './add-edit-stt.component';

describe('AddEditSttComponent', () => {
  let component: AddEditSttComponent;
  let fixture: ComponentFixture<AddEditSttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
