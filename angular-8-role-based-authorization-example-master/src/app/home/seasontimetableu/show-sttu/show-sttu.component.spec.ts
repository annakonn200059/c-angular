import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSttuComponent } from './show-sttu.component';

describe('ShowSttuComponent', () => {
  let component: ShowSttuComponent;
  let fixture: ComponentFixture<ShowSttuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSttuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSttuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
