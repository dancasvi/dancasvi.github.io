export class ProjetoItem {
    active: boolean;
    curtidas:number;
    descricao:string;
    icone:string;
    id:number;
    nome:string;
    rota:string;
    tecnologias:string;
}


export class ProjetoWrapperDTO<T> {
    msg: string;
    status: number;
    data: T;
}