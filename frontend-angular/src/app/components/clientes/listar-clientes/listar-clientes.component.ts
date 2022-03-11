import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  // Criando uma lista de objetos e iterando sobre ela
  listaClientes: any[] = [
    {nome:'Anderson', endereco: 'endereco ficticio', email: 'email@email.com', telefone:"99065488", id:1},
    {nome:'Simone', endereco: 'endereco Ficticio 2', email: 'Simone@Simone.com', telefone:"99065422", id:2},
    {nome:'Joao', endereco: 'endereco Ficticio 3', email: 'Joao@Joao.com', telefone:"99165423", id:3}    
    
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
