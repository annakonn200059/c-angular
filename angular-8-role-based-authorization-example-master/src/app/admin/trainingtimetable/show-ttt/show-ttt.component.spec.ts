import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTttComponent } from './show-ttt.component';

describe('ShowTttComponent', () => {
  let component: ShowTttComponent;
  let fixture: ComponentFixture<ShowTttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
