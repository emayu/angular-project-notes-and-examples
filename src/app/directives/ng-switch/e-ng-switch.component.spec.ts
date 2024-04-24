import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENgSwitchComponent } from './e-ng-switch.component';

describe('ENgSwitchComponent', () => {
  let component: ENgSwitchComponent;
  let fixture: ComponentFixture<ENgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENgSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ENgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
