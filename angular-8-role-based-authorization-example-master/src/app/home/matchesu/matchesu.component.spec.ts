import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesuComponent } from './matchesu.component';

describe('MatchesuComponent', () => {
  let component: MatchesuComponent;
  let fixture: ComponentFixture<MatchesuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
