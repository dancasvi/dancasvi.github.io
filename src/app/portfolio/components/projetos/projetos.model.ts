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

export class ProjetoItemMock {
    id: number;
    projectName: string;
    active: boolean;
    icon: string;
    description: string;
    status: number;
    route: string;
    technologies: string;
}

export class ProjetoWrapperDTO<T> {
    msg: string;
    status: number;
    data: T;
}