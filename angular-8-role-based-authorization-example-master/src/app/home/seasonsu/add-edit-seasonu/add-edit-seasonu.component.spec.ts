import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSeasonuComponent } from './add-edit-seasonu.component';

describe('AddEditSeasonuComponent', () => {
  let component: AddEditSeasonuComponent;
  let fixture: ComponentFixture<AddEditSeasonuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSeasonuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSeasonuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
