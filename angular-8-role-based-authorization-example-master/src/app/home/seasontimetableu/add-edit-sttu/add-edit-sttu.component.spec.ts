import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSttuComponent } from './add-edit-sttu.component';

describe('AddEditSttuComponent', () => {
  let component: AddEditSttuComponent;
  let fixture: ComponentFixture<AddEditSttuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSttuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSttuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
