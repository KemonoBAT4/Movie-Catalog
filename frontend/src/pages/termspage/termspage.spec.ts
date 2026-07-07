import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Termspage } from './termspage';

describe('Termspage', () => {
  let component: Termspage;
  let fixture: ComponentFixture<Termspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Termspage],
    }).compileComponents();

    fixture = TestBed.createComponent(Termspage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
