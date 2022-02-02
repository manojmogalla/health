import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLabasistantComponent } from './add-labasistant.component';

describe('AddLabasistantComponent', () => {
  let component: AddLabasistantComponent;
  let fixture: ComponentFixture<AddLabasistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLabasistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLabasistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
