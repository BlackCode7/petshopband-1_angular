import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarClienteComponent } from './components/clientes/cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarFornecedorComponent } from './components/fornecedores/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { ListarFornecedoresComponent } from './components/fornecedores/listar-fornecedores/listar-fornecedores.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { HeaderComponent } from './components/home/header/header.component';
import { CadastrarPedidoComponent } from './components/pedidos/cadastrar-pedido/cadastrar-pedido.component';
import { ListarPedidosComponent } from './components/pedidos/listar-pedidos/listar-pedidos.component';
import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { CadastrarVendaComponent } from './components/vendas/cadastrar-venda/cadastrar-venda.component';
import { ListarVendasComponent } from './components/vendas/listar-vendas/listar-vendas.component';


const routes: Routes = [
  
]

@NgModule({
  declarations: [
    AppComponent,
    CadastrarClienteComponent,
    CadastrarFornecedorComponent,
    ListarFornecedoresComponent,
    FooterComponent,
    HeaderComponent,
    CadastrarPedidoComponent,
    ListarPedidosComponent,
    CadastrarProdutoComponent,
    ListarProdutosComponent,
    CadastrarVendaComponent,
    ListarVendasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }