import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInjComponent } from './show-inj.component';

describe('ShowInjComponent', () => {
  let component: ShowInjComponent;
  let fixture: ComponentFixture<ShowInjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
