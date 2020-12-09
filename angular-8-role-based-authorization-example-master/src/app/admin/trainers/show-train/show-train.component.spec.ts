import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTrainComponent } from './show-train.component';

describe('ShowTrainComponent', () => {
  let component: ShowTrainComponent;
  let fixture: ComponentFixture<ShowTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
