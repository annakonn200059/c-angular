import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmatchinfoComponent } from './viewmatchinfo.component';

describe('ViewmatchinfoComponent', () => {
  let component: ViewmatchinfoComponent;
  let fixture: ComponentFixture<ViewmatchinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmatchinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmatchinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
