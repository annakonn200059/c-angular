import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWorkuComponent } from './show-worku.component';

describe('ShowWorkuComponent', () => {
  let component: ShowWorkuComponent;
  let fixture: ComponentFixture<ShowWorkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWorkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWorkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
