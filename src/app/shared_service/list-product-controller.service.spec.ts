import { TestBed } from '@angular/core/testing';

import { ListProductControllerService } from './list-product-controller.service';

describe('ListProductControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListProductControllerService = TestBed.get(ListProductControllerService);
    expect(service).toBeTruthy();
  });
});
