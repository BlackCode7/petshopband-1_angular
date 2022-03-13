import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-vendas',
  templateUrl: './listar-vendas.component.html',
  styleUrls: ['./listar-vendas.component.css']
})
export class ListarVendasComponent implements OnInit {

  listaVendas: any[] = [
    {id:1, dataVenda: '01/01/2020', quantidade: 13}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
