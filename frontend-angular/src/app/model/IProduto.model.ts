export interface IProduto{
    idProduto: number;
    nomeProduto: string;
    precoProduto: number;
    dataValidade: Date;
    promocao: boolean;
    foto: string; // caminho da foto na pasta assets/img/nome_foto.jpg/png

}