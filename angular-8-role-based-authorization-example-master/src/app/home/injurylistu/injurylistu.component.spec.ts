import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjurylistuComponent } from './injurylistu.component';

describe('InjurylistuComponent', () => {
  let component: InjurylistuComponent;
  let fixture: ComponentFixture<InjurylistuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjurylistuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjurylistuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
