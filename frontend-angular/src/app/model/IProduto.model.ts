export interface IProduto{
    idProduto: number;
    nomeProduto: string;
    precoProduto: number;
    dataValidade: Date | string;
    promocao: boolean;

    fabricanteProduto: string;
    descricaoProduto: string;
    custoProduto: number;

    foto: string; // caminho da foto na pasta assets/img/nome_foto.jpg/png

}