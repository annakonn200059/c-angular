import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingtimetableuComponent } from './trainingtimetableu.component';

describe('TrainingtimetableuComponent', () => {
  let component: TrainingtimetableuComponent;
  let fixture: ComponentFixture<TrainingtimetableuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingtimetableuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingtimetableuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
