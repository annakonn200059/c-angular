import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInjuComponent } from './show-inju.component';

describe('ShowInjuComponent', () => {
  let component: ShowInjuComponent;
  let fixture: ComponentFixture<ShowInjuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInjuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
