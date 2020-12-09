import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTrainuComponent } from './show-trainu.component';

describe('ShowTrainuComponent', () => {
  let component: ShowTrainuComponent;
  let fixture: ComponentFixture<ShowTrainuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTrainuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTrainuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
