import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearLayout } from './clear-layout';

describe('ClearLayout', () => {
  let component: ClearLayout;
  let fixture: ComponentFixture<ClearLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClearLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(ClearLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
