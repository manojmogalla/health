import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestInactiveComponent } from './labtest-inactive.component';

describe('LabtestInactiveComponent', () => {
  let component: LabtestInactiveComponent;
  let fixture: ComponentFixture<LabtestInactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabtestInactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtestInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
