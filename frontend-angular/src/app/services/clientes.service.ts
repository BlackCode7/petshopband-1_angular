import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICliente } from '../model/ICliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  private URL: string = 'http://localhost:3000/clientes';

  constructor(
    private http: HttpClient
  ) { }

buscarClientes(): Observable<ICliente[]>{
  return this.http.get<ICliente[]>(this.URL);
}

}
