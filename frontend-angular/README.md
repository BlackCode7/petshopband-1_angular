#### corrigindo falhas

#### data 22/03/2022 - instalando libs
npm install ngx-toastr --save
npm install @angular/animations --save
npm install sweetalert2 @sweetalert2/ngx-sweetalert2 >>> https://github.com/sweetalert2/ngx-sweetalert2


##### Comandos para criação dos componentes

nome da branch principal >>> PetShopBand

ng g c components/template/header 
ng g c components/template/footer

#### criando components / services / modules
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
criando components reutilizaveis

ng g c shared/components/card-produto --module=shared
ng g c shared/components/card-cliente --module=shared

------------------------------------------------
code review
git checkout -b listagem_de_produtos origin/main
git status
git add .
git push origin listagem_de_produtos   


------------------------------------------------
Criando services
ng g s services/produtos
ng g s services/clientes
ng g s services/fornecedores
ng g s services/pedidos
ng g s services/vendas
------------------------------------------------


Criando o guard da aplicação para proteger as rotas

[1:02 pm, 20/03/2022] 
Anderson Martins: 
https://www.tektutorialshub.com/angular/angular-canactivate-guard-example/#:~:text=The%20Angular%20CanActivate%20guard%20decides,us%20to%20cancel%20the%20navigation.

https://www.youtube.com/watch?v=RQB4Jwkc-c0&t=14s

[1:09 pm, 20/03/2022] 
Anderson Martins: 
https://angular.io/api/router/CanActivate

comando para criar o guard em angular
ng g guard auth/shared/auth


------------------------------------------------


rodando o service com json-server
npx json-server --watch db.json
------------------------------------------------
##### *ngIf - condicional if / else / elseBlock #elseBlock 

        arquivo.html
        public login: boolean = false;  

        arquivocomponent.ts
        <!--Aplicar mensagens de erro caso o usuário digite senhas erradas ou login errado!-->
            <span *ngIf="login; else elseBlock" class="badge badge-danger">Sua password ou senha estão incorretas! Tente novamente!</span>  
            <ng-template #elseBlock>Login efetuado com sucesso!</ng-template>                 
        <!--Aplicar mensagens de erro caso o usuário digite senhas erradas ou login errado!-->


#### Aula 21 - Arrays, Objetos, for e ngFor no Angular.

    //listas - esse é um tipo string por causa do [] ---> Depois é necessário
    // Jogar ele dentro do construtor

    ------------------------------------------------------------
    listaStrings: string[] = ['primeiro', 'segundo', 'terceiro'];
    // Contagem de itens em uma lista com for(){} - inicio no construtor

    for (let item of this.listaString){
      console.log(item);
    }   
    -------------------------------------------------------------
    ListaNumeros: number[] = [ 12, 3, 21, 4, 32, 33, 44, 34]
    // Contagem da listagem de números - inicio no construtor 
    for(const item of this.ListaNumeros){
      console.log(item);
    }
    -------------------------------------------------------------
    // Criando uma lista de objetos e iterando sobre ela - component.ts
    listaProdutos: any[] = [
        {nome:'Emolitan1', fabricante: 'Emolitanium', dataValidade: '01/01/2023', descricao:"Aumento de imunidade", valorCusto: 12.03, valorVenda: 46.99, id:1},
        {nome:'BayPet1', fabricante: 'BayPetPluz', dataValidade: '01/01/2024', descricao:"Aumento de imunidade", valorCusto: 12.04, valorVenda: 41.99, id:2},
        {nome:'Mdrow1', fabricante: 'Mdrow', dataValidade: '01/01/2025', descricao:"Aumento de imunidade", valorCusto: 12.05, valorVenda: 37.99, id:3}
    ]

    // component.html - iterando em uma tabela com os itens da lista de objetos
    <tbody>
        <tr *ngFor="let prod of listaProdutos">
            <td>{{ prod.id }}</td>
            <td>{{ prod.nome }}</td>
            <td>{{ prod.fabricante }}</td>
            <td>{{ prod.dataValidade | date: "shortDate" }}</td>
            <td>{{ prod.descricao }}</td>
            <td>{{ prod.valorCusto | currency: "BRL" }}</td>
            <td>{{ prod.valorVenda | currency: "BRL" }}</td>    
            <td>
                <button type="button" class="btn btn-warning">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button type="button" class="btn btn-danger ml-2" style="margin-left: 3px;">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </td>    
        </tr>               
    </tbody>

#### Aula 23 - Data bindings - Two way e event
    É quando podemos injetar dados nos nossos formularios ou enviar dados do formuçário para o typescript

    -------------------------------------
    component.html
    <div class="col-md-6">
        <div class="form-group">
            <label for="descricao">Valor de Venda</label>
            <input type="number" class="form-control" id="valorVenda" placeholder="0.00" 
            
            name="valor-venda" [(ngModel)]="valorVenda">
            
            <!-- 
            É necessário ter a propriedade name="" e a propriedade [(ngModel)]="variavel que esta no typescript" 
            para que o Two-Way DataBinding funcione
            -->
        </div>
    </div>
    <!-- Definindo a função (click)="salvarProduto()" -->
    <button class="btn btn-success" (click)="salvarProduto()">
        salvar
    </button>
    -------------------------------------
    component.ts
    // Definindo variaveis
    nome?: string;
    fabricante?: string;
    validade?: string;
    descricao?: string;
    valorCusto?: number;
    valorVenda?: number;

    // Definição de funções
      salvarProduto():void{
          console.log('Nome', this.nome);
          console.log('Fabricante', this.fabricante);
          console.log('Validade', this.validade);
          console.log('Descrição', this.descricao);
          console.log('Valor Custo', this.valorCusto);
          console.log('Valor Venda', this.valorVenda);
          alert('Salvo com sucesso!');
      }





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
