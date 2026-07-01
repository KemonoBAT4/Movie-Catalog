import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailspage } from './detailspage';

describe('Detailspage', () => {
  let component: Detailspage;
  let fixture: ComponentFixture<Detailspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detailspage],
    }).compileComponents();

    fixture = TestBed.createComponent(Detailspage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
