import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasontimetableComponent } from './seasontimetable.component';

describe('SeasontimetableComponent', () => {
  let component: SeasontimetableComponent;
  let fixture: ComponentFixture<SeasontimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasontimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasontimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
