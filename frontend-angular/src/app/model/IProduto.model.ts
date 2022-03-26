export interface IProduto{
    id: number; //Aqui o atributo é opcional com a ?
    nomeProduto: string;
    precoProduto: number;
    dataValidade: Date;
    promocao: boolean;
    quantidadeProduto: number;

    fabricanteProduto: string;
    descricaoProduto: string;
    custoProduto: number;

    foto: string|null; // caminho da foto na pasta assets/img/nome_foto.jpg/png

}