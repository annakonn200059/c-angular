import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementworkersuComponent } from './managementworkersu.component';

describe('ManagementworkersuComponent', () => {
  let component: ManagementworkersuComponent;
  let fixture: ComponentFixture<ManagementworkersuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementworkersuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementworkersuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
