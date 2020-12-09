import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlaceComponent } from './show-place.component';

describe('ShowPlaceComponent', () => {
  let component: ShowPlaceComponent;
  let fixture: ComponentFixture<ShowPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
