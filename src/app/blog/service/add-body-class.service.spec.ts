/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddBodyClassService } from './add-body-class.service';

describe('Service: AddBodyClass', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddBodyClassService]
    });
  });

  it('should ...', inject([AddBodyClassService], (service: AddBodyClassService) => {
    expect(service).toBeTruthy();
  }));
});
