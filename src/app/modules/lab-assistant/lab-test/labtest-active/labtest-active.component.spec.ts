import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestActiveComponent } from './labtest-active.component';

describe('LabtestActiveComponent', () => {
  let component: LabtestActiveComponent;
  let fixture: ComponentFixture<LabtestActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabtestActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtestActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
