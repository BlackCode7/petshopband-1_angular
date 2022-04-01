import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IFornecedor } from '../model/IFornecedor.model';
import { ToastrService } from 'ngx-toastr';
import { catchError, EMPTY, map } from 'rxjs';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  private URL: string = 'http://localhost:3000/fornecedores';

  constructor(
    private toastr: ToastrService,
    private http: HttpClient
  ) { }

  // Método para deletar produtos
  excluir(id: number): Observable<any>{
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  //Atualiza fornecedores
  cadastrarFornecedoresPut(fornecedor: IFornecedor): Observable<IFornecedor>{
    console.assert(this.URL != null, "URL não encontrada!");
    return this.http.put<IFornecedor>(`${this.URL}/${fornecedor.id}`, fornecedor).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  // Método para buscar produtos por id
  buscarFornecedoresIDGet(id: number): Observable<IFornecedor>{
    return this.http.get<IFornecedor>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  //Busca fornecedores
  buscarFornecedoresGet(): Observable<IFornecedor[]>{
    console.assert(this.URL != null, "URL não encontrada");    
    return this.http.get<IFornecedor[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  cadastrar(fornecedor: IFornecedor): Observable<IFornecedor>{    
    console.assert(this.URL != null, "URL não encontrada");    
    return this.http.post<IFornecedor>(this.URL, fornecedor).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    )
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
