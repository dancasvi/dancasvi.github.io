export class ExperienciaItem {
    id:number;
    cargo:string;
    nomeEmpresa: string;
    dataFim: Date;
    dataInicio: Date;
    descricao: string;
    exibir: boolean;
}

export class ExperienciaItemMock {
    id: number;
    company: string;
    startDate: Date;
    endDate: Date;
    description: string;
    occupation: string;
}

export class ExperienciaWrapperDTO<T> {
    msg: string;
    status: number;
    data: T;
}