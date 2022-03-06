import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './auth/usuarios/usuarios.component';
import { CadastrarClienteComponent } from './components/clientes/cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarFornecedorComponent } from './components/fornecedores/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { ListarFornecedoresComponent } from './components/fornecedores/listar-fornecedores/listar-fornecedores.component';

import { CadastrarPedidoComponent } from './components/pedidos/cadastrar-pedido/cadastrar-pedido.component';
import { ListarPedidosComponent } from './components/pedidos/listar-pedidos/listar-pedidos.component';
import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { CadastrarVendaComponent } from './components/vendas/cadastrar-venda/cadastrar-venda.component';
import { ListarVendasComponent } from './components/vendas/listar-vendas/listar-vendas.component';
import { HomeComponent } from './components/home/home.component';



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
    ListarVendasComponent,
    UsuariosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
