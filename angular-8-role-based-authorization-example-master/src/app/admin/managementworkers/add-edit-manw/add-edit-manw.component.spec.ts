import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditManwComponent } from './add-edit-manw.component';

describe('AddEditManwComponent', () => {
  let component: AddEditManwComponent;
  let fixture: ComponentFixture<AddEditManwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditManwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditManwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
