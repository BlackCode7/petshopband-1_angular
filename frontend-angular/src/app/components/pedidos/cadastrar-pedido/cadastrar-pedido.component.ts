import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFornecedor } from 'src/app/model/IFornecedor.model';
import { IPedido } from 'src/app/model/IPedido.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { FornecedoresService } from 'src/app/services/fornecedores.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cadastrar-pedido',
  templateUrl: './cadastrar-pedido.component.html',
  styleUrls: ['./cadastrar-pedido.component.css']
})
export class CadastrarPedidoComponent implements OnInit {

  // PedidosService
  pedidos: IPedido = {
    id: 0, //idPedido
    nomeProduto: '',
    nomeCliente: '',
    quantidade: 0,
    dataPedido: new Date(),
    enderecoCliente: '',
    dataEntrega: new Date(),
    valorTotal: 0,
    status: false,
  }

  pedidosPP = new Array<IPedido>();

  //FornecedoresService
  fornecedor: IFornecedor = {
    id: 0,
    nomeFornecedores: '',
    emailFornecedores: '',
    telefonefornecedores: '',
    cnpjFornecedores: '',
    dataCadastroSistema: new Date(),
  }

  constructor(
    private pedidosService: PedidosService,
    private router: Router,
    private clientesService: ClientesService,
    private produtosService: ProdutosService,
    private fornecedoresService: FornecedoresService,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.atualizarFornecedorPorID();
  }

   //Função que popula os dados do cliente nos campos ( ngOnInit )
   atualizarFornecedorPorID(): void{
    const id = Number(this.activateRouter.snapshot.paramMap.get('id'));
    this.pedidosService.buscarPedidosIDGet(id).subscribe(retorno => {
      this.pedidos = retorno;
    })
  }

  // Metodo Put para Atualizar clientes
  cadastrarPedidosPut(): void{
    this.pedidosService.cadastrarPedidosPut(this.pedidos).subscribe(data => {
      this.pedidos = data;
      console.assert(this.pedidos != null, "Erro ao Atualizar cliente ASSERTION");
      /* Montando a mensagem de erro */
      this.pedidosService.exibirMensagemErro('Sistema', 'Pedido atualizado com sucesso', 'toast-success');
      /* Redirecionando o usuário para tela de listagem */
      this.router.navigate(['/pedidos']);
    })
  }

  salvarPedidos():void{
    this.pedidosService.salvarPedidos(this.pedidos).subscribe(itemsPedidos => {        
      console.log(itemsPedidos, "#@#@#@#@##@#@#");
      this.pedidosPP = itemsPedidos;
      this.pedidosService.exibirMensagemErro('Sistema', 
          `Pedido número ${this.pedidos.id} foi cadastrado com sucesso. Produto: ${this.pedidos.nomeProduto}, ${this.pedidos.nomeCliente}`, 
          'toast-success');
      this.router.navigate(['/pedidos']);
    })
  }


}