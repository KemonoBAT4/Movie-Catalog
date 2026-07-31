import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Explorepage } from './explorepage';

describe('Explorepage', () => {
  let component: Explorepage;
  let fixture: ComponentFixture<Explorepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Explorepage],
    }).compileComponents();

    fixture = TestBed.createComponent(Explorepage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
