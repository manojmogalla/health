import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabCentersComponent } from './lab-centers.component';

describe('LabCentersComponent', () => {
  let component: LabCentersComponent;
  let fixture: ComponentFixture<LabCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
