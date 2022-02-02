import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLabCenterComponent } from './add-lab-center.component';

describe('AddLabCenterComponent', () => {
  let component: AddLabCenterComponent;
  let fixture: ComponentFixture<AddLabCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLabCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLabCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
