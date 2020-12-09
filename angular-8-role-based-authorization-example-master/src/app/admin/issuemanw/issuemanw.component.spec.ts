import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuemanwComponent } from './issuemanw.component';

describe('IssuemanwComponent', () => {
  let component: IssuemanwComponent;
  let fixture: ComponentFixture<IssuemanwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuemanwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuemanwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
