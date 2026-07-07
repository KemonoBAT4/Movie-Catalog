import { TestBed } from '@angular/core/testing';

import { WebUtilsService } from './web-utils-service';

describe('WebUtilsService', () => {
  let service: WebUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
