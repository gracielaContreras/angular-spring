import { Injectable } from '@angular/core';
import { CLIENTE } from './cliente.json';
import { Cliente } from './cliente';
import { of, Observable } from 'rxjs';

@Injectable()
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Cliente[]>{ 
    return of(CLIENTE);
  }
}
