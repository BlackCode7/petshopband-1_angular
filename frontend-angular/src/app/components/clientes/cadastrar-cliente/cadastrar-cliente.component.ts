import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // Metodo Post para salvar clientes
  cadastrarClientesPost(): void{
    this.clientesService.cadastrarClientesPost(this.cliente).subscribe(data => {
      this.cliente = data;

      console.assert(this.cliente != null, "Erro ao Cadastrar cliente ASSERTION");

      /* Montando a mensagem de erro */
      this.clientesService.exibeMensagemErro(
        'Sistema', 
        `${this.cliente.nomeCliente} foi cadastrado com sucesse. ID: ${this.cliente.id}`, 
        'toast-success'
      );

      /* Redirecionando o usuário para tela de listagem */
      return this.router.navigate(['/clientes']);

    })
  }

}
