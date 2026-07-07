import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cookiespage } from './cookiespage';

describe('Cookiespage', () => {
  let component: Cookiespage;
  let fixture: ComponentFixture<Cookiespage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cookiespage],
    }).compileComponents();

    fixture = TestBed.createComponent(Cookiespage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
