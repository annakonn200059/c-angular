import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSeasonuComponent } from './show-seasonu.component';

describe('ShowSeasonuComponent', () => {
  let component: ShowSeasonuComponent;
  let fixture: ComponentFixture<ShowSeasonuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSeasonuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSeasonuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
