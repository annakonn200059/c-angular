import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasontimetableuComponent } from './seasontimetableu.component';

describe('SeasontimetableuComponent', () => {
  let component: SeasontimetableuComponent;
  let fixture: ComponentFixture<SeasontimetableuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasontimetableuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasontimetableuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
