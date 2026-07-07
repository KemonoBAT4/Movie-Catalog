import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOnlyLayout } from './footer-only-layout';

describe('FooterOnlyLayout', () => {
  let component: FooterOnlyLayout;
  let fixture: ComponentFixture<FooterOnlyLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterOnlyLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterOnlyLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
