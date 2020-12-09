import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamuComponent } from './teamu.component';

describe('TeamuComponent', () => {
  let component: TeamuComponent;
  let fixture: ComponentFixture<TeamuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
