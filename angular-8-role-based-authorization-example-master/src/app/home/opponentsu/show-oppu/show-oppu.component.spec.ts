import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOppuComponent } from './show-oppu.component';

describe('ShowOppuComponent', () => {
  let component: ShowOppuComponent;
  let fixture: ComponentFixture<ShowOppuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOppuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOppuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
