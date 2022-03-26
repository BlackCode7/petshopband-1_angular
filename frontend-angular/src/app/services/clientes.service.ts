import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { ICliente } from '../model/ICliente.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  private URL: string = 'http://localhost:3000/clientes';

  constructor(
    private toastr: ToastrService,
    private http: HttpClient
  ) { }

buscarClientes(): Observable<ICliente[]>{
  return this.http.get<ICliente[]>(this.URL).pipe(
    map(retorno => retorno),
    catchError(erro => this.exibeErro(erro))
  );
}

cadastrarClientesPost(cliente: ICliente): Observable<ICliente>{
  console.log(this.URL != null);
  return this.http.post<ICliente>(this.URL, cliente).pipe(
    map(retorno => retorno),
    catchError(erro => this.exibeErro(erro))
  );
}

exibeMensagemErro(titulo: string, mensagem: string, tipo: string): void{
  this.toastr.show(mensagem, titulo, { closeButton: true, progressBar: true}, tipo);
}

exibeErro(e: any): Observable<any>{
  this.exibeMensagemErro("ERRO!!!", "Não foi possível realizar a operação", "Toast-error");
  return EMPTY;
}

}
