import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentsuComponent } from './opponentsu.component';

describe('OpponentsuComponent', () => {
  let component: OpponentsuComponent;
  let fixture: ComponentFixture<OpponentsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpponentsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
