import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowViewmatchinfoComponent } from './show-viewmatchinfo.component';

describe('ShowViewmatchinfoComponent', () => {
  let component: ShowViewmatchinfoComponent;
  let fixture: ComponentFixture<ShowViewmatchinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowViewmatchinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowViewmatchinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
