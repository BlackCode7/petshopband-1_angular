##### Comandos para criação dos componentes

nome da branch principal >>> PetShopBand

ng g c components/template/header 
ng g c components/template/footer

###########################################
criando components / services / modules
-------------------------------------------
ng g c components/clientes/cadastrar-cliente
ng g s components/clientes/cadastrar-cliente/services 
ng g m components/clientes/cadastrar-cliente

ng g c components/clientes/listar-clientes
ng g s components/clientes/listar-clientes/services 
ng g m components/clientes/listar-clientes

-----------------------------------------------
ng g c components/fornecedores/listar-fornecedores
ng g s components/fornecedores/listar-fornecedores/services
ng g m components/fornecedores/listar-fornecedores

ng g c components/fornecedores/cadastrar-fornecedor
ng g s components/fornecedores/cadastrar-fornecedor/services
ng g m components/fornecedores/cadastrar-fornecedor
-----------------------------------------------

ng g c components/produtos/cadastrar-produto
ng g c components/produtos/listar-produtos

ng g c components/pedidos/cadastrar-pedido
ng g c components/pedidos/listar-pedidos

ng g c components/vendas/cadastrar-venda
ng g c components/vendas/listar-vendas

------------------------------------------------

##### *ngIf - condicional if / else / elseBlock #elseBlock 

        arquivo.html
        public login: boolean = false;  

        arquivocomponent.ts
        <!--Aplicar mensagens de erro caso o usuário digite senhas erradas ou login errado!-->
            <span *ngIf="login; else elseBlock" class="badge badge-danger">Sua password ou senha estão incorretas! Tente novamente!</span>  
            <ng-template #elseBlock>Login efetuado com sucesso!</ng-template>                 
        <!--Aplicar mensagens de erro caso o usuário digite senhas erradas ou login errado!-->









# FrontendAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
