import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToExportComponent } from './button-to-export.component';

describe('ButtonToExportComponent', () => {
  let component: ButtonToExportComponent;
  let fixture: ComponentFixture<ButtonToExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonToExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
