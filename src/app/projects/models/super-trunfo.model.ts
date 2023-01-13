export class SuperTrunfoWrapper<T> {
    status:number;
    msg:string;
    data: T[]
}

export enum MenuItem {
    NEW,
    RULES
}