import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInjLUComponent } from './show-inj-l-u.component';

describe('ShowInjLUComponent', () => {
  let component: ShowInjLUComponent;
  let fixture: ComponentFixture<ShowInjLUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInjLUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInjLUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
