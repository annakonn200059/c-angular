import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersuComponent } from './trainersu.component';

describe('TrainersuComponent', () => {
  let component: TrainersuComponent;
  let fixture: ComponentFixture<TrainersuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainersuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
