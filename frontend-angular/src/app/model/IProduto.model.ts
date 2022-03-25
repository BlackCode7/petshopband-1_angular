export interface IProduto{
    idProduto?: number; //Aqui o atributo é opcional com a ?
    nomeProduto: string;
    precoProduto: number;
    dataValidade: Date | string;
    promocao: boolean;
    quantidadeProduto: number;

    fabricanteProduto: string;
    descricaoProduto: string;
    custoProduto: number;

    foto: string; // caminho da foto na pasta assets/img/nome_foto.jpg/png

}