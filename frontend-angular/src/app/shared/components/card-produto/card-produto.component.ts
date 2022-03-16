import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() dataValidade?: Date;
  @Input() precoProduto?: number;
  @Input() promocao?: boolean;
  @Input() idProduto?: number;
  @Input() nomeProduto?: string;
  @Input() foto?: string;

  @Input() arrayCard: any[] = [this.dataValidade, this.precoProduto,
  this.promocao, this.idProduto, this.nomeProduto, this.foto];    

  constructor() { }

  ngOnInit(): void {
  }

}
