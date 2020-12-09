import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTeamuComponent } from './show-teamu.component';

describe('ShowTeamuComponent', () => {
  let component: ShowTeamuComponent;
  let fixture: ComponentFixture<ShowTeamuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTeamuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTeamuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
