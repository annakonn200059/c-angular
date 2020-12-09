import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementworkersComponent } from './managementworkers.component';

describe('ManagementworkersComponent', () => {
  let component: ManagementworkersComponent;
  let fixture: ComponentFixture<ManagementworkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementworkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementworkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
