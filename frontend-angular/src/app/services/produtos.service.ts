import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { IProduto } from '../model/IProduto.model';
import { ToastrService } from 'ngx-toastr';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL: string = 'http://localhost:3000/produtos/';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  // Método para buscar todos os produtos
  buscarProdutosGet(): Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  //Método para cadastrar Produtos
  cadastrarProdutosPost(produto: IProduto): Observable<IProduto>{

    console.assert(this.URL != null);

    return this.http.post<IProduto>(this.URL, produto).pipe(
      map(retorno => retorno),
      
      catchError(erro => this.exibeErro(erro))
    );
  }

  //Método para chamar a função exibirMensagemErro()
  exibeErro(e: any): Observable<any>{
    this.exibirMensagemErro("ERRO!!!", "Não foi possível realizar a operação", "Toast-error");
    return EMPTY;
  } 

  //Método para exibir a Mensagem de erro
  exibirMensagemErro(titulo: string, mensagem: string, tipo: string): void{
    this.toastr.show(mensagem, titulo, { closeButton: true, progressBar: true }, tipo);
  }     

}
