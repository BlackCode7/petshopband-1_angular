import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-fornecedores',
  templateUrl: './listar-fornecedores.component.html',
  styleUrls: ['./listar-fornecedores.component.css']
})
export class ListarFornecedoresComponent implements OnInit {

  listaFornecedores: any[] = [
    {id:1, nome:'EmolitanForn1', email: 'Emolitanium1@Emolitanium.com', telefone: '990478485', cnpj:125458856899154, datCadastro: '03/05/2008'},
    {id:2, nome:'EmolitanForn2', email: 'Emolitanium2@Emolitanium.com', telefone: '990478486', cnpj:125458856899155, datCadastro: '03/05/2009'},
    {id:3, nome:'EmolitanForn3', email: 'Emolitanium3@Emolitanium.com', telefone: '990478487', cnpj:125458856899156, datCadastro: '03/05/2019'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
