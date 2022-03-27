export interface IPedido{
    id: number;
    nomeProduto: string;
    nomeCliente: string;
    quantidade: number;
    dataPedido: Date;
    enderecoCliente: string;
    dataEntrega: Date;
    valorTotal: number;
    status: boolean;
}