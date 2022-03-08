import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dataValidade: Date = new Date();
  public precoProduto: number = 12.03;
  public promocao: boolean = false;
  public idProduto: number = 1;
  public nomeProduto: string = 'Produto_1'
  // Chamando uma imagem - essa é nova
  public foto: string = 'assets/img/gatoO.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
