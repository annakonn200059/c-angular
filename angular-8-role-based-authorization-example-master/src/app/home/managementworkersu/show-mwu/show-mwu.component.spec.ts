import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMwuComponent } from './show-mwu.component';

describe('ShowMwuComponent', () => {
  let component: ShowMwuComponent;
  let fixture: ComponentFixture<ShowMwuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMwuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMwuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
