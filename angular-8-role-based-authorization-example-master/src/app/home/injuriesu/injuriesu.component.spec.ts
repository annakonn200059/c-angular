import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjuriesuComponent } from './injuriesu.component';

describe('InjuriesuComponent', () => {
  let component: InjuriesuComponent;
  let fixture: ComponentFixture<InjuriesuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjuriesuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjuriesuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
