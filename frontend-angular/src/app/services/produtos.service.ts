import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { IProduto } from '../model/IProduto.model';
import { ToastrService } from 'ngx-toastr';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  //http://localhost:8090/api/produtos

  private URL: string = '/api/produtos'; // --> forma correta
  
  //private URL: string = 'http://localhost:8090/api/produtos';
  //private URL: string = 'http://localhost:3000/produtos/';

  constructor( private http: HttpClient, private toastr: ToastrService ) { } 
  
  // Método para deletar produtos
  excluir(id: number): Observable<any>{
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  // Método para buscar todos os produtos
  buscarProdutosGet(): Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  // Método para buscar produtos por id
  buscarProdutosIDGet(id: number): Observable<IProduto>{
    return this.http.get<IProduto>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  //Método para cadastrar Produtos
  cadastrarProdutosPut(produto: IProduto): Observable<IProduto>{
    console.assert(this.URL != null, "URL não encontrada!");
    return this.http.put<IProduto>(`${this.URL}/${produto.id}`, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  //Método para cadastrar Produtos
  cadastrarProdutosPost(produto: IProduto): Observable<IProduto>{
    console.assert(this.URL != null, "URL não encontrada!");
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
