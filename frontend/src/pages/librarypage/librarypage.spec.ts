import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Librarypage } from './librarypage';

describe('Librarypage', () => {
  let component: Librarypage;
  let fixture: ComponentFixture<Librarypage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Librarypage],
    }).compileComponents();

    fixture = TestBed.createComponent(Librarypage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
