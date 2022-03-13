import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-pedido',
  templateUrl: './cadastrar-pedido.component.html',
  styleUrls: ['./cadastrar-pedido.component.css']
})
export class CadastrarPedidoComponent implements OnInit {

  itemNome?: string;
  dataPedido?: Date = new Date();
  quantidade?: number;
  nomeCliente?: string;
  enderecoCliente?: string;
  valorProdutoEntrega?: number;

  constructor() { }

  ngOnInit(): void {
  }

  salvarPedidosPost(): void{
    console.log(this.itemNome);
    console.log(this.dataPedido);
    console.log(this.quantidade);
    console.log(this.nomeCliente);
    console.log(this.enderecoCliente);
    console.log(this.valorProdutoEntrega);
  }

}
