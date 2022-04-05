import { Component, Input, OnInit } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { map } from 'rxjs';

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

  produtoArray = new Array<IProduto>();

  constructor(
    private produtoService: ProdutosService
  ) { }

  ngOnInit(): void {
  }

  /* eu tenho listaProdutos ---> produtoService */
  buscarProdutosGet(): void{
    this.produtoService.buscarProdutosGet().subscribe(data => {
        this.produtoArray = data;
      });
  }




}
