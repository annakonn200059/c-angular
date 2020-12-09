import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOppComponent } from './add-edit-opp.component';

describe('AddEditOppComponent', () => {
  let component: AddEditOppComponent;
  let fixture: ComponentFixture<AddEditOppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditOppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditOppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
