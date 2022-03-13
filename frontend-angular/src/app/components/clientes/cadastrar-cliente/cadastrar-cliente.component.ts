import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  nome?: string;
  endereco?: string;
  email?: string;
  telefone?: string;

  constructor() { }

  ngOnInit(): void {
  }

  // Metodo Post para salvar clientes
  salvarClientePost(): void{
    console.log(this.nome, this.email, this.endereco, this.telefone)
  }

}
