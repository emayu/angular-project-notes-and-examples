import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEigthComponent } from './section-eigth.component';

describe('SectionEigthComponent', () => {
  let component: SectionEigthComponent;
  let fixture: ComponentFixture<SectionEigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionEigthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
