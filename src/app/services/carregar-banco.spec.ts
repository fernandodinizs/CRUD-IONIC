import { TestBed } from '@angular/core/testing';

import { CarregarBanco } from './carregar-banco';

describe('CarregarBanco', () => {
  let service: CarregarBanco;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarregarBanco);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
