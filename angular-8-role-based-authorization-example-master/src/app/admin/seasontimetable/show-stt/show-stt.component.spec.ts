import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSttComponent } from './show-stt.component';

describe('ShowSttComponent', () => {
  let component: ShowSttComponent;
  let fixture: ComponentFixture<ShowSttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
