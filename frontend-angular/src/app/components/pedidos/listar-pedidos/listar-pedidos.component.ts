import { Component, OnInit } from '@angular/core';
import { IPedido } from 'src/app/model/IPedido.model';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidosComponent implements OnInit {

    // Criando uma lista de objetos e iterando sobre ela
    listaPedidos: IPedido[] = []

    // // Criando uma lista de objetos e iterando sobre ela
    // listaPedidos: any[] = [
    //   {id:1, item: 'Emolitanium1', dataPedido: '01/01/2020', quantidade:12},
    //   {id:2, item: 'Emolitanium2', dataPedido: '01/01/2019', quantidade:4},
    //   {id:3, item: 'Emolitanium3', dataPedido: '01/01/2021', quantidade:7},
    // ]
  

  constructor(
    private pedidosService: PedidosService
  ) { }

  ngOnInit(): void {
    this.buscarPedidos();
  }

  buscarPedidos(): void{
    this.pedidosService.buscarPedidos().subscribe(data => {
      this.listaPedidos = data;
    })
  }

}
