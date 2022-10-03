import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BaseWrapperDTO } from "src/app/portfolio/models/base-models.model";

@Injectable({ providedIn: 'root' })
export class BaseAPI {
    constructor(private http: HttpClient) {

    }

    buscarPorId(entity, id) {
        return this.http.get(`http://dancasvi.com.br:21075/${entity}/${id}`)
        .pipe(map((dados:BaseWrapperDTO<any>) => dados));
    }
}