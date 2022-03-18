import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';
import { CardClienteComponent } from './components/card-cliente/card-cliente.component';



@NgModule({
  declarations: [
    CardProdutoComponent,
    CardClienteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ CardProdutoComponent, CardClienteComponent]
})
export class SharedModule { }

/**
 * Preciso exportar o sharedModule para que possa ser
 * usado em outros  modulos
 * 
 */