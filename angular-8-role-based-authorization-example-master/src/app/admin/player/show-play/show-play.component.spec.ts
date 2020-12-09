import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlayComponent } from './show-play.component';

describe('ShowPlayComponent', () => {
  let component: ShowPlayComponent;
  let fixture: ComponentFixture<ShowPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
