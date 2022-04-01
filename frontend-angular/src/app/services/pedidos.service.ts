import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IPedido } from '../model/IPedido.model';
import { ToastrService } from 'ngx-toastr';
import { catchError, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { IFornecedor } from '../model/IFornecedor.model';
import { ICliente } from '../model/ICliente.model';

@Injectable({
  providedIn: 'root'
})

export class PedidosService {
  
  private URL: string = 'http://localhost:3000/pedidos'

  constructor( private toastr: ToastrService,
               private http: HttpClient ) { }

 // Método para deletar produtos
 excluir(id: number): Observable<any>{
  return this.http.delete<any>(`${this.URL}/${id}`).pipe(
    map(retorno => retorno),
    catchError(erro => this.exibeErro(erro))
  );
}

// Método para buscar Cliente por id
buscarPedidosIDGet(id: number): Observable<IPedido>{
  return this.http.get<IPedido>(`${this.URL}/${id}`).pipe(
    map(retorno => retorno),
    catchError(erro => this.exibeErro(erro))
  );
} 

//Método para cadastrar Produtos
cadastrarPedidosPut(pedido: IPedido): Observable<IPedido>{
  console.assert(this.URL != null, "URL não encontrada!");
  return this.http.put<IPedido>(`${this.URL}/${pedido.id}`, pedido).pipe(
    map(retorno => retorno),
    catchError(erro => this.exibeErro(erro))
  );
}
           


/****************************** ClientesService ********************************/ 
  buscarClientes(): Observable<ICliente[]>{
    console.assert(this.URL != null, "URL não encontrada"); 
    return this.http.get<ICliente[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

/****************************** FornecedoresService ********************************/  
  buscarFornecedoresGet(): Observable<IFornecedor[]>{
    console.assert(this.URL != null, "URL não encontrada");    
    return this.http.get<IFornecedor[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

/***************************** PedidosService *********************************/
  buscarPedidos(): Observable<IPedido[]>{
    console.assert(this.URL != null, "URL não encontrada!!!");
    return this.http.get<IPedido[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  /** Tela de listagem do pedidos */
  buscarPedidoPorID(id: number): Observable<IPedido>{
    return this.http.get<IPedido>(`${this.URL}/${id}`);
  }

  salvarPedidos(pedido: IPedido): Observable<IPedido[]>{
    console.assert(this.URL != null, "URL não encontrada!!!");
    return this.http.post<IPedido[]>(this.URL, pedido).pipe(
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
