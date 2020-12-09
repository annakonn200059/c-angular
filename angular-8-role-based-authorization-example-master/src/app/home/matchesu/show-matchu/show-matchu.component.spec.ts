import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMatchuComponent } from './show-matchu.component';

describe('ShowMatchuComponent', () => {
  let component: ShowMatchuComponent;
  let fixture: ComponentFixture<ShowMatchuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMatchuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMatchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
