import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduto } from '../model/IProduto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL: string = 'http://localhost:3000/produtos';

  constructor(
    private http: HttpClient,
  ) { }

  buscarProdutos(): Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.URL);
  }

}
