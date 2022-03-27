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
