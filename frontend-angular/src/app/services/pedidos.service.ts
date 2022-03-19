import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IPedido } from '../model/IPedido.model';

@Injectable({
  providedIn: 'root'
})


export class PedidosService {
  
  private URL: string = 'http://localhost:3000/pedidos'

  constructor(
    private http: HttpClient
  ) { }

  buscarPedidos(): Observable<IPedido[]>{
    return this.http.get<IPedido[]>(this.URL);
  }

  buscarPedidoPorID(id: number): Observable<IPedido>{
    return this.http.get<IPedido>(`${this.URL}/${id}`);
  }

  salvarPedidos(pedido: IPedido): Observable<IPedido[]>{
    return this.http.post<IPedido[]>(this.URL, pedido);
  }

  atualizarPedido(pedido: IPedido): Observable<IPedido[]>{
    return this.http.put<IPedido[]>(`${this.URL}/${pedido.idPedido}`, pedido);
  }

  deletandoPedidos(id: number): Observable<IPedido[]>{
    return this.http.delete<IPedido[]>(`${this.URL}/${id}`);
  }

}
