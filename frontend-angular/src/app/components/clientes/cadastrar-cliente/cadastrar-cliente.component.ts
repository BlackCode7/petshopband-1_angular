import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/model/ICliente.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  cliente: ICliente = {
    id: 0,
    nomeCliente: '',
    emailCliente: '',
    enderecoCliente: '',
    telefoneCliente: '',
  }

  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.atualizarClientePorID();
  }

  //Função que popula os dados do cliente nos campos ( ngOnInit )
  atualizarClientePorID(): void{
    const id = Number(this.activateRouter.snapshot.paramMap.get('id'));
    this.clientesService.buscarClientesIDGet(id).subscribe(retorno => {
      this.cliente = retorno;
    })
  }

  // Metodo Put para Atualizar clientes
  cadastrarClientesPut(): void{
    this.clientesService.cadastrarClientesPut(this.cliente).subscribe(data => {
      this.cliente = data;
      console.assert(this.cliente != null, "Erro ao Atualizar cliente ASSERTION");
      /* Montando a mensagem de erro */
      this.clientesService.exibeMensagemErro('Sistema', `${this.cliente.nomeCliente} foi Atualizado com sucesse.`, 'toast-success');
      /* Redirecionando o usuário para tela de listagem */
      return this.router.navigate(['/clientes']);
    })
  }

  // Metodo Post para salvar clientes
  cadastrarClientesPost(): void{
    this.clientesService.cadastrarClientesPost(this.cliente).subscribe(data => {
      this.cliente = data;
      console.assert(this.cliente != null, "Erro ao Cadastrar cliente ASSERTION");
      /* Montando a mensagem de erro */
      this.clientesService.exibeMensagemErro( 'Sistema', `${this.cliente.nomeCliente} foi cadastrado com sucesse.`, 'toast-success' );
      /* Redirecionando o usuário para tela de listagem */
      return this.router.navigate(['/clientes']);
    })
  }

}
