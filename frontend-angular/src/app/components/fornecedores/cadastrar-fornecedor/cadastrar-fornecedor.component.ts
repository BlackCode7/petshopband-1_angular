import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedoresService } from 'src/app/services/fornecedores.service';
import { IFornecedor } from '../../../model/IFornecedor.model';

@Component({
  selector: 'app-cadastrar-fornecedor',
  templateUrl: './cadastrar-fornecedor.component.html',
  styleUrls: ['./cadastrar-fornecedor.component.css']
})
export class CadastrarFornecedorComponent implements OnInit {

  fornecedor: IFornecedor = {
    id: 0,
    nomeFornecedores: '',
    emailFornecedores: '',
    telefonefornecedores: '',
    cnpjFornecedores: '',
    dataCadastroSistema: new Date(),

  }  

  constructor(
    private fornecedoresService: FornecedoresService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.atualizaFornecedorPorID();
  }

  // Busca fornecedores por id
  atualizaFornecedorPorID(): void{
    const id = Number(this.activateRouter.snapshot.paramMap.get('id'));
    this.fornecedoresService.buscarFornecedoresIDGet(id).subscribe(retorno => {
      this.fornecedor = retorno;
    })
  }

  // Atualiza fornecedores
  cadastrarFornecedoresPut(): void{
    this.fornecedoresService.cadastrarFornecedoresPut(this.fornecedor).subscribe(data => {
      console.assert(data != null, "DADOS não encontrados!!!");
      this.fornecedor = data;
      //Montando mensagem de erro
      this.fornecedoresService.exibirMensagemErro(
        'Sistema', `${ this.fornecedor.nomeFornecedores } foi Atualizado com sucesso.`, // ID:${ this.fornecedor.id }
        'toast-success'
      )
      //Jogando usuário para outra rota
      this.router.navigate(['/fornecedores']);
    })
  }

  // Cadastrar fornecedores
  cadastrar(): void{
    this.fornecedoresService.cadastrar(this.fornecedor).subscribe(data => {
      console.assert(this.fornecedor.id != null, "ID não encontrado!!!");
      this.fornecedor = data;
      //Montando mensagem de erro
      this.fornecedoresService.exibirMensagemErro(
        'Sistema', ` ${ this.fornecedor.nomeFornecedores } foi cadastrado com sucesso. ID: ${ this.fornecedor.id } `,
        'toast-success'
      )
      //Jogando usuário para outra rota
      this.router.navigate(['/fornecedores']);
    })
  }

}
