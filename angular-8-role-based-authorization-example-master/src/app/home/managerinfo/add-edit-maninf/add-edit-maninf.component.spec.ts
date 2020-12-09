import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditManinfComponent } from './add-edit-maninf.component';

describe('AddEditManinfComponent', () => {
  let component: AddEditManinfComponent;
  let fixture: ComponentFixture<AddEditManinfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditManinfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditManinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
