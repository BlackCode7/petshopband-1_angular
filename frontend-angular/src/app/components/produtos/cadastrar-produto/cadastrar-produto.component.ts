import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  dataValidade: '',
  descricaoProduto: "",
  custoProduto: 0,
  precoProduto: 0,
  quantidadeProduto: 0,
  idProduto: 0,
  promocao: false,
  foto: ''
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
      //Montando mensagem de erro
      this.produtosService.exibirMensagemErro(
        'Sistema',
        `${this.produto.nomeProduto} foi cadastrado com sucesso. ID: ${this.produto.idProduto}`,
        'toast-success'
      );

      //Jogando o usuario para tela de cadastro
      this.router.navigate(['/produtos']);
    })
  }

}
