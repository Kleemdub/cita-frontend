import { TestBed, inject } from '@angular/core/testing';

import { WatchitService } from './watchit.service';

describe('WatchitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatchitService]
    });
  });

  it('should be created', inject([WatchitService], (service: WatchitService) => {
    expect(service).toBeTruthy();
  }));
});
