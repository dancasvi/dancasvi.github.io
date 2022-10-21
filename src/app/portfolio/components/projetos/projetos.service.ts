import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProjetoItem, ProjetoWrapperDTO } from "./projetos.model";

@Injectable({ providedIn: 'root' })
export class ProjetosService {
    constructor(private http: HttpClient) {

    }
    
    buscarProjetos() {
        return this.http.get('http://dancasvi.com.br:21075/projetos')
        .pipe(map((dados:ProjetoWrapperDTO<ProjetoItem[]>) => dados));
    }
}