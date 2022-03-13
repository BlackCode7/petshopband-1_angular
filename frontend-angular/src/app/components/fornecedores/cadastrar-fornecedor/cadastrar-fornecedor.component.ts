import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-fornecedor',
  templateUrl: './cadastrar-fornecedor.component.html',
  styleUrls: ['./cadastrar-fornecedor.component.css']
})
export class CadastrarFornecedorComponent implements OnInit {

  nome?: string;
  email?: string;
  telefone?: string;
  cnpj?: string;
  dataCadastro?: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  salvarFornecedoresPost(): void{
    console.log(this.nome, this.email, this.telefone, this.cnpj, this.dataCadastro)
  }

}
