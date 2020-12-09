import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesuComponent } from './expensesu.component';

describe('ExpensesuComponent', () => {
  let component: ExpensesuComponent;
  let fixture: ComponentFixture<ExpensesuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
