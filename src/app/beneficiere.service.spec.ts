import { TestBed, inject } from '@angular/core/testing';

import { BeneficiereService } from './beneficiere.service';

describe('BeneficiereService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeneficiereService]
    });
  });

  it('should be created', inject([BeneficiereService], (service: BeneficiereService) => {
    expect(service).toBeTruthy();
  }));
});
