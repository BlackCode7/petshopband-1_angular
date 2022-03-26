import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { IProduto } from 'src/app/model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

produto: IProduto = {
  nomeProduto: '',
  fabricanteProduto: '',
  dataValidade: new Date(),
  descricaoProduto: '',
  custoProduto: 0,
  precoProduto: 0,
  quantidadeProduto: 0,
  id: 0,
  promocao: false,
  foto: null
};

  constructor(
    private produtosService: ProdutosService,
    //para jogar o usuario na tela de cadastrar depois de ele efetuar o cadastro do produto
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  salvarProdutoPost():void{
    this.produtosService.cadastrarProdutosPost(this.produto).subscribe(data => {
      
      console.log(data);   
      
      this.produto = data;

      console.log("RETORNO DOS PRODUTOS >>> ", this.produto)
      console.assert(this.produto.id != null, "O produto não foi cadastrado!!!")
      console.assert(this.produto.nomeProduto != null, "O produto não foi cadastrado!!!")

      //Montando mensagem de erro
      this.produtosService.exibirMensagemErro(
        'Sistema',
        `${this.produto.nomeProduto} foi cadastrado com sucesso. ID: ${this.produto.id}`,
        'toast-success'
      );

      //Jogando o usuario para tela de cadastro
      this.router.navigate(['/produtos']);
    })
  }

  

}
