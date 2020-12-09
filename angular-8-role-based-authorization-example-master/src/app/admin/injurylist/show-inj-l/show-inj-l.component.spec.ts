import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInjLComponent } from './show-inj-l.component';

describe('ShowInjLComponent', () => {
  let component: ShowInjLComponent;
  let fixture: ComponentFixture<ShowInjLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInjLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInjLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
