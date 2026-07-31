import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Watchpage } from './watchpage';

describe('Watchpage', () => {
  let component: Watchpage;
  let fixture: ComponentFixture<Watchpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Watchpage],
    }).compileComponents();

    fixture = TestBed.createComponent(Watchpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
