import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './auth/usuarios/usuarios.component';
import { AppComponent } from './app.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';
import { ListarClientesComponent } from './components/clientes/listar-clientes/listar-clientes.component';
import { CadastrarClienteComponent } from './components/clientes/cadastrar-cliente/cadastrar-cliente.component';
import { ListarFornecedoresComponent } from './components/fornecedores/listar-fornecedores/listar-fornecedores.component';
import { CadastrarFornecedorComponent } from './components/fornecedores/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { ListarPedidosComponent } from './components/pedidos/listar-pedidos/listar-pedidos.component';
import { CadastrarPedidoComponent } from './components/pedidos/cadastrar-pedido/cadastrar-pedido.component';
import { ListarVendasComponent } from './components/vendas/listar-vendas/listar-vendas.component';
import { CadastrarVendaComponent } from './components/vendas/cadastrar-venda/cadastrar-venda.component';
import { HomeComponent } from './components/home/home.component';

// Voltar na Aula 13
// https://www.youtube.com/watch?v=0PvPXaFT6lY


const routes: Routes = [
  
  // Aqui seria o componente de autenticação
  { path:'', component: UsuariosComponent},

  { path:'home', component: HomeComponent}, //Entra na home

  { path:'produtos', component: ListarProdutosComponent},
  { path:'produtos/cadastrar-produto', component: CadastrarProdutoComponent},

  
  { path:'clientes', component: ListarClientesComponent},
  { path:'clientes/cadastrar-cliente', component: CadastrarClienteComponent},

  { path:'fornecedores', component: ListarFornecedoresComponent},
  { path:'fornecedores/cadastrar-fornecedor', component: CadastrarFornecedorComponent},

  { path:'pedidos', component: ListarPedidosComponent},
  { path:'pedidos/cadastrar-pedido', component: CadastrarPedidoComponent},

  { path:'vendas', component: ListarVendasComponent},
  { path:'vendas/cadastrar-venda', component: CadastrarVendaComponent},

  //Atualizar Produtos
  { path: 'produtos/atualizar/:id', component: CadastrarProdutoComponent},
  { path: 'clientes/atualizar/:id', component: CadastrarClienteComponent},
  { path: 'fornecedores/atualizar/:id', component: CadastrarFornecedorComponent},
  { path: 'pedidos/atualizar/:id', component: CadastrarPedidoComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
