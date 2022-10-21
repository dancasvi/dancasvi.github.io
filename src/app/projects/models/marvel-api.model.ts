export class MarvelWrapper<T> {
    code:number;
    status:string;
    data:MarvelContainer<T>;
    etag:string;
    copyright:string;
    attributionText:string;
    attributionHTML:string;
}

export class MarvelContainer<T> {
    offset:number;
    limit:number;
    total:number;
    count:number;
    results:T[];
}

export class MarvelError {
    code:number;
    status:string;
}

export enum MarvelElements {
    CHARACTERS = 0,
    COMICS,
    CREATORS,
    EVENTS,
    SERIES,
    STORIES
}