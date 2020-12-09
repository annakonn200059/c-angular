import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlaceuComponent } from './show-placeu.component';

describe('ShowPlaceuComponent', () => {
  let component: ShowPlaceuComponent;
  let fixture: ComponentFixture<ShowPlaceuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPlaceuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPlaceuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
