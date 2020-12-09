import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTrainuComponent } from './add-edit-trainu.component';

describe('AddEditTrainuComponent', () => {
  let component: AddEditTrainuComponent;
  let fixture: ComponentFixture<AddEditTrainuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTrainuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTrainuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
