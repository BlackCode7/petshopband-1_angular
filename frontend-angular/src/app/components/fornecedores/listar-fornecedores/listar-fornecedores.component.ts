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

  buscarFornecedores(): void{
    this.fornecedoresService.buscarFornecedoresGet().subscribe(data => {
      this.listaFornecedores = data;  
    })
  }

}
