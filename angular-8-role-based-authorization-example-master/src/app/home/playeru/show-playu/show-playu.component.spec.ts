import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlayuComponent } from './show-playu.component';

describe('ShowPlayuComponent', () => {
  let component: ShowPlayuComponent;
  let fixture: ComponentFixture<ShowPlayuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPlayuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPlayuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
