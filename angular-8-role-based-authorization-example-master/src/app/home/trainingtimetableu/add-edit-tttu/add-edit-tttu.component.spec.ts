import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTttuComponent } from './add-edit-tttu.component';

describe('AddEditTttuComponent', () => {
  let component: AddEditTttuComponent;
  let fixture: ComponentFixture<AddEditTttuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTttuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTttuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
