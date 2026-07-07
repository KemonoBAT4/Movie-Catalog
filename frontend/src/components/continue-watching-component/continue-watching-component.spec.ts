import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueWatchingComponent } from './continue-watching-component';

describe('ContinueWatchingComponent', () => {
  let component: ContinueWatchingComponent;
  let fixture: ComponentFixture<ContinueWatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinueWatchingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContinueWatchingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
