import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MarvelWrapper } from "../models/marvel-api.model";
const apiKey = "692e05025fcd553497e5637feb6f718b";
const url = "https://gateway.marvel.com:443/v1/public";

@Injectable({ providedIn: 'root' })
export class MarvelAppService { 
    constructor(private http: HttpClient) {
    }

    getAll(entity:string, page:number) {
        return this.http.get(`${url}/${entity}?limit=10&offset=${page}&apikey=${apiKey}`)
        .pipe(map((dados:MarvelWrapper<any>) => dados));
    }

    getByName(entity, name, page) {
        let item = this.getNameItem(entity);

        return this.http.get(`${url}/${entity}?${item}=${name}&limit=10&offset=${page}&apikey=${apiKey}`)
        .pipe(map((dados:MarvelWrapper<any>) => dados));
    }

    getById(entity, id) {
        return this.http.get(`${url}/${entity}/${id}?apikey=${apiKey}`)
        .pipe(map((dados:MarvelWrapper<any>) => dados));
    }

    private getNameItem(entity):string {
        let item = '';
        switch(entity) {
            case 'characters':
                item = 'nameStartsWith';
                break;
            case 'comics':
                item = 'title';
                break;
            case 'creators':
                item = 'nameStartsWith';
                break;
            case 'events':
                item = 'nameStartsWith';
                break;
            case 'series':
                item = 'titleStartsWith';
                break;
        }

        return item;
    }
}