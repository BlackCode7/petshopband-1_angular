import { TestBed } from '@angular/core/testing';

import { CadastrarClienteService } from './cadastrar-cliente.service';

describe('CadastrarClienteService', () => {
  let service: CadastrarClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
