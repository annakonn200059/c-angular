import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMatchuComponent } from './add-edit-matchu.component';

describe('AddEditMatchuComponent', () => {
  let component: AddEditMatchuComponent;
  let fixture: ComponentFixture<AddEditMatchuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditMatchuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMatchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
