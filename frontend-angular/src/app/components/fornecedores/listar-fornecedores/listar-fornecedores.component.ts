import { Component, OnInit } from '@angular/core';
import { IFornecedor } from 'src/app/model/IFornecedor.model';
import { FornecedoresService } from 'src/app/services/fornecedores.service';

@Component({
  selector: 'app-listar-fornecedores',
  templateUrl: './listar-fornecedores.component.html',
  styleUrls: ['./listar-fornecedores.component.css']
})
export class ListarFornecedoresComponent implements OnInit {

  listaFornecedores: IFornecedor[] = []

  constructor(private fornecedoresService: FornecedoresService) { }

  ngOnInit(): void {
    this.buscarFornecedores();
  }

  /** Deletando produtos */
  deletar(fornecedor: IFornecedor): void{
    this.fornecedoresService.excluir(fornecedor.id).subscribe(() => {
      this.fornecedoresService.exibirMensagemErro('Sistema', `${fornecedor.nomeFornecedores} foi excluido com sucesso!`, 'toast-error');
      
      /*Chamada de função para carregar os produtos na lista*/
      this.buscarFornecedores();
      
    })
  }

  buscarFornecedores(): void{
    this.fornecedoresService.buscarFornecedoresGet().subscribe(data => {
      this.listaFornecedores = data;  
    })
  }

}
