import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Privacypage } from './privacypage';

describe('Privacypage', () => {
  let component: Privacypage;
  let fixture: ComponentFixture<Privacypage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Privacypage],
    }).compileComponents();

    fixture = TestBed.createComponent(Privacypage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
