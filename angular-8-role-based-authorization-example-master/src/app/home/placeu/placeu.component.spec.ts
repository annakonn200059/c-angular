import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceuComponent } from './placeu.component';

describe('PlaceuComponent', () => {
  let component: PlaceuComponent;
  let fixture: ComponentFixture<PlaceuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
