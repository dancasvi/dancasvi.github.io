import { Component, OnInit } from "@angular/core";
import { ProjetoItem } from "../../models/projetos.model";

@Component({
    selector: 'app-projetos',
    templateUrl: 'projetos.component.html',
    styleUrls: ['projetos.component.scss']
})
export class ProjetosComponent implements OnInit {
    itemProj = new ProjetoItem(0, '', [''], '');

    listaProj: ProjetoItem[] = []

    ngOnInit(): void {
        for(let i = 0; i < 4; i++) {
            const proj = new ProjetoItem(i, 'Projeto ' + (i+1), [''], 'img');
            this.listaProj.push(proj);
        }
    }
}