export class ExperienciaItem {
    id:number;
    cargo:string;
    nomeEmpresa: string;
    dataFim: Date;
    dataInicio: Date;
    descricao: string;
    exibir: boolean;
}


export class ExperienciaWrapperDTO<T> {
    msg: string;
    status: number;
    data: T;
}