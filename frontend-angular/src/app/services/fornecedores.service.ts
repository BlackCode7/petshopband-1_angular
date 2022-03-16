import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IFornecedor } from '../model/IFornecedor.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  private URL: string = 'http://localhost:3000/fornecedores';

  constructor(
    private http: HttpClient
  ) { }

  buscarFornecedores(): Observable<IFornecedor[]>{
    return this.http.get<IFornecedor[]>(this.URL);
  }

}
