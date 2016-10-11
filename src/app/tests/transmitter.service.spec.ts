/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransmitterService } from '../service/transmitter.service';

describe('Service: Transmitter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransmitterService]
    });
  });

  it('should ...', inject([TransmitterService], (service: TransmitterService) => {
    expect(service).toBeTruthy();
  }));
});
