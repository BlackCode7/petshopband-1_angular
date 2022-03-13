import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  // Criando listas
  listaString: string[] = ['Celular', 'NoteBook', 'Tablet', 'impressora'];
  ListaNumeros: number[] = [ 12, 3, 21, 4, 32, 33, 44, 34]

  // Criando objetos
  objetoModelo = {
    nome:'Andersdon',
    idade: 43,
    email: 'anderson77martins@outlook.com'
  }

  // Criando uma lista de objetos e iterando sobre ela
  listaProdutos: any[] = [
    {nome:'Emolitan1', fabricante: 'Emolitanium', dataValidade: '01/01/2023', descricao:"Aumento de imunidade", valorCusto: 12.03, valorVenda: 46.99, id:1},
    {nome:'BayPet1', fabricante: 'BayPetPluz', dataValidade: '01/01/2024', descricao:"Aumento de imunidade", valorCusto: 12.04, valorVenda: 41.99, id:2},
    {nome:'Mdrow1', fabricante: 'Mdrow', dataValidade: '01/01/2025', descricao:"Aumento de imunidade", valorCusto: 12.05, valorVenda: 37.99, id:3}
  ]

  constructor() { 

    // Contagem de itens em uma lista com for(){}
    for (let item of this.listaString){
      console.log(item);
    }

    for(const item of this.ListaNumeros){
      console.log(item);
    }

    // imprimindo o objetoModelo
    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);
    console.log(this.objetoModelo.email);
    console.log(this.objetoModelo.idade);
    

  }

  ngOnInit(): void {
  }

}
