import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkeruComponent } from './workeru.component';

describe('WorkeruComponent', () => {
  let component: WorkeruComponent;
  let fixture: ComponentFixture<WorkeruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkeruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
