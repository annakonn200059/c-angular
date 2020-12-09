import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjurylistComponent } from './injurylist.component';

describe('InjurylistComponent', () => {
  let component: InjurylistComponent;
  let fixture: ComponentFixture<InjurylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjurylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjurylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
