import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchComponent } from './watch-component';

describe('WatchComponent', () => {
  let component: WatchComponent;
  let fixture: ComponentFixture<WatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WatchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
