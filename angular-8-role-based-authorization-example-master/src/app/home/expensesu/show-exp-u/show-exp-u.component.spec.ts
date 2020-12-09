import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExpUComponent } from './show-exp-u.component';

describe('ShowExpUComponent', () => {
  let component: ShowExpUComponent;
  let fixture: ComponentFixture<ShowExpUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowExpUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowExpUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
