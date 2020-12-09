import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayeruComponent } from './playeru.component';

describe('PlayeruComponent', () => {
  let component: PlayeruComponent;
  let fixture: ComponentFixture<PlayeruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayeruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
