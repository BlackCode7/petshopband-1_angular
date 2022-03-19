export interface IPedido{
    idPedido: number;
    idCliente: number;
    idFornecedores: number;
    idProduto: number;
    nomeProduto: string;
    nomeCliente: string;
    quantidade: number;
    dataPedido: Date;
    dataEntrega: Date;
    valorTotal: number;
    status: boolean;
}