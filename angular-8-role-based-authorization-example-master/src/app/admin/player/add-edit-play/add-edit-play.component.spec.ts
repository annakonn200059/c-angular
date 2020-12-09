import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPlayComponent } from './add-edit-play.component';

describe('AddEditPlayComponent', () => {
  let component: AddEditPlayComponent;
  let fixture: ComponentFixture<AddEditPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
