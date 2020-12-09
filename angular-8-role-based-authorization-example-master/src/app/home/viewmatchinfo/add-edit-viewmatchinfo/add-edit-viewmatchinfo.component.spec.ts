import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewmatchinfoComponent } from './add-edit-viewmatchinfo.component';

describe('AddEditViewmatchinfoComponent', () => {
  let component: AddEditViewmatchinfoComponent;
  let fixture: ComponentFixture<AddEditViewmatchinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditViewmatchinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditViewmatchinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
