import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProjetoItem, ProjetoWrapperDTO } from "./projetos.model";

const URL = 'http://dancasvi.com.br:21012';

@Injectable({ providedIn: 'root' })
export class ProjetosService {
    constructor(private http: HttpClient) {

    }
    
    buscarProjetos() {
        return this.http.get(`${URL}/projetos`)
        .pipe(map((dados:ProjetoWrapperDTO<ProjetoItem[]>) => dados));
    }
}