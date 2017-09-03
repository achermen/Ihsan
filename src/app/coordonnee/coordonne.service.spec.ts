import { TestBed, inject } from '@angular/core/testing';

import { CoordonneService } from './coordonne.service';

describe('CoordonneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoordonneService]
    });
  });

  it('should be created', inject([CoordonneService], (service: CoordonneService) => {
    expect(service).toBeTruthy();
  }));
});
