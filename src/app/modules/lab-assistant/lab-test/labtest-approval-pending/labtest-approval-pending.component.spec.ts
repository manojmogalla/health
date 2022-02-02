import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestApprovalPendingComponent } from './labtest-approval-pending.component';

describe('LabtestApprovalPendingComponent', () => {
  let component: LabtestApprovalPendingComponent;
  let fixture: ComponentFixture<LabtestApprovalPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabtestApprovalPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtestApprovalPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
