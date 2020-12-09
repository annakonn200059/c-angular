import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOppuComponent } from './add-edit-oppu.component';

describe('AddEditOppuComponent', () => {
  let component: AddEditOppuComponent;
  let fixture: ComponentFixture<AddEditOppuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditOppuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditOppuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
