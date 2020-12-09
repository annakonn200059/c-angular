import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowManwComponent } from './show-manw.component';

describe('ShowManwComponent', () => {
  let component: ShowManwComponent;
  let fixture: ComponentFixture<ShowManwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowManwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowManwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
