import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowManinfComponent } from './show-maninf.component';

describe('ShowManinfComponent', () => {
  let component: ShowManinfComponent;
  let fixture: ComponentFixture<ShowManinfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowManinfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowManinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
