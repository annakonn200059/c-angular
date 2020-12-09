import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsuComponent } from './seasonsu.component';

describe('SeasonsuComponent', () => {
  let component: SeasonsuComponent;
  let fixture: ComponentFixture<SeasonsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
