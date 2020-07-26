import { Injectable } from '@angular/core';
import { CLIENTE } from './cliente.json';
import { Cliente } from './cliente';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteService {

  private urlEndPoint:string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{ 
    //return of(CLIENTE);
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }
}
