import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { ListarClientesModule } from './components/clientes/listar-clientes/listar-clientes.module';
import { ListarClientesComponent } from './components/clientes/listar-clientes/listar-clientes.component';

// Configuração para abrasileirar datas e moedas no angular
import { LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
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
  // Exportando aqui o modulo SharedModule para que possa ser usado em outros modulos 
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListarClientesModule,
    FormsModule,
    SharedModule,
    HttpClientModule 
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
