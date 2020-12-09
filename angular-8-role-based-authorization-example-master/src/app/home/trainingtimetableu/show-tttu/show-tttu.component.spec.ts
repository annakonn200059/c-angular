import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTttuComponent } from './show-tttu.component';

describe('ShowTttuComponent', () => {
  let component: ShowTttuComponent;
  let fixture: ComponentFixture<ShowTttuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTttuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTttuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
