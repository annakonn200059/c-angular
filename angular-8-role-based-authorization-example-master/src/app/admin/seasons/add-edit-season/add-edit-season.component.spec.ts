import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSeasonComponent } from './add-edit-season.component';

describe('AddEditSeasonComponent', () => {
  let component: AddEditSeasonComponent;
  let fixture: ComponentFixture<AddEditSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
