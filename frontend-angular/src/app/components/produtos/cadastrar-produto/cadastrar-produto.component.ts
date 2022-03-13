import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  nome?: string;
  fabricante?: string;
  validade?: string;
  descricao?: string;
  valorCusto?: number;
  valorVenda?: number;

  constructor() { }

  ngOnInit(): void {
  }

  salvarProdutoPost():void{
    console.log('Nome', this.nome);
    console.log('Fabricante', this.fabricante);
    console.log('Validade', this.validade);
    console.log('Descrição', this.descricao);
    console.log('Valor Custo', this.valorCusto);
    console.log('Valor Venda', this.valorVenda);
    alert('Salvo com sucesso!');
  }

}
