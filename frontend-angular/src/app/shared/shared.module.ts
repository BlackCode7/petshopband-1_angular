import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';



@NgModule({
  declarations: [
    CardProdutoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ CardProdutoComponent]
})
export class SharedModule { }

/**
 * Preciso exportar o sharedModule para que possa ser
 * usado em outros  modulos
 * 
 */