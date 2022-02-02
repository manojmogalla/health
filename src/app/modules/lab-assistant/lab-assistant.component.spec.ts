import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAssistantComponent } from './lab-assistant.component';

describe('LabAssistantComponent', () => {
  let component: LabAssistantComponent;
  let fixture: ComponentFixture<LabAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
