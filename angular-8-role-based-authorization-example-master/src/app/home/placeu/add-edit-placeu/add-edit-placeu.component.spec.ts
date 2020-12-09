import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPlaceuComponent } from './add-edit-placeu.component';

describe('AddEditPlaceuComponent', () => {
  let component: AddEditPlaceuComponent;
  let fixture: ComponentFixture<AddEditPlaceuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPlaceuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPlaceuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
