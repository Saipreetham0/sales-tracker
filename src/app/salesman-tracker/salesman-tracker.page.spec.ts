import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesmanTrackerPage } from './salesman-tracker.page';

describe('SalesmanTrackerPage', () => {
  let component: SalesmanTrackerPage;
  let fixture: ComponentFixture<SalesmanTrackerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmanTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
