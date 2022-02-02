import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAssistantLoginComponent } from './lab-assistant-login.component';

describe('LabAssistantLoginComponent', () => {
  let component: LabAssistantLoginComponent;
  let fixture: ComponentFixture<LabAssistantLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabAssistantLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabAssistantLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
