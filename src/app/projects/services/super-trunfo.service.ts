import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { SuperTrunfoWrapper } from "../models/super-trunfo.model";

const url = "http://dancasvi.com.br:21075";

@Injectable({ providedIn: 'root' })
export class SuperTrunfoService { 
    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get(`${url}/super-trunfo/cards`)
        .pipe(map((dados:SuperTrunfoWrapper<any>) => dados));
    }

    getCardById(id) {
        return this.http.get(`${url}/super-trunfo/cards/${id}`)
        .pipe(map((dados:SuperTrunfoWrapper<any>) => dados));
    }
}