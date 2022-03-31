import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ICliente } from '../../../model/ICliente.model';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  // Criando uma lista de objetos e iterando sobre ela
  listaClientes: ICliente[] = [];
  
  constructor(
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    this.buscarClientes();
  }

  /** Deletando produtos */
  deletar(cliente: ICliente): void{
    this.clientesService.excluir(cliente.id).subscribe(() => {
      this.clientesService.exibeMensagemErro('Sistema', `${cliente.nomeCliente} foi excluido com sucesso!`, 'toast-error');
      
      /*Chamada de função para carregar os produtos na lista*/
      this.buscarClientes();
      
    })
  }


  buscarClientes(): void{
    this.clientesService.buscarClientes().subscribe(data => {
      this.listaClientes = data;
    })
  }

}
