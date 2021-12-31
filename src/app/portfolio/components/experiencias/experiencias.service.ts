import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ExperienciaItem, ExperienciaWrapperDTO } from "../../models/experiencias.model";

@Injectable({ providedIn: 'root' })
export class ExperienciasService {
    constructor(private http: HttpClient) {

    }
    
    buscarExperiencias() {
        return this.http.get('http://dancasvi.com.br:21075/experiencias')
        .pipe(map((dados:ExperienciaWrapperDTO<ExperienciaItem[]>) => dados));
    }
}