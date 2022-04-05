import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  // // Criando listas
  // listaString: string[] = ['Celular', 'NoteBook', 'Tablet', 'impressora'];
  // ListaNumeros: number[] = [ 12, 3, 21, 4, 32, 33, 44, 34]

  // // Criando objetos
  // objetoModelo = {
  //   nome:'Andersdon',
  //   idade: 43,
  //   email: 'anderson77martins@outlook.com'
  // }
  
  listaProdutos: IProduto[] = [];
 
  constructor(
    private produtoService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.buscarProdutosGet();
  }

  /** Deletando produtos */
  deletar(produto: IProduto): void{
    this.produtoService.excluir(produto.id).subscribe(() => {
      this.produtoService.exibirMensagemErro('Sistema', `${produto.nomeProduto} foi excluido com sucesso!`, 'toast-error');
      
      /*Chamada de função para carregar os produtos na lista*/
      this.buscarProdutosGet();
      
    })
  }


  /* eu tenho listaProdutos ---> produtoService */
  buscarProdutosGet(): void{
    this.produtoService.buscarProdutosGet().subscribe(data => {
        this.listaProdutos = data;
      });
  }

}
