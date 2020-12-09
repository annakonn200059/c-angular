import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOppComponent } from './show-opp.component';

describe('ShowOppComponent', () => {
  let component: ShowOppComponent;
  let fixture: ComponentFixture<ShowOppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
