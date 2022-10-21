import { Component, OnInit } from "@angular/core";
// import { ProjetoItem } from "../../models/projetos.model";
import { ProjetoItem } from "./projetos.model";
import { ProjetosService } from "./projetos.service";

@Component({
    selector: 'app-projetos',
    templateUrl: 'projetos.component.html',
    styleUrls: ['projetos.component.scss']
})
export class ProjetosComponent implements OnInit {
    itemProj// = new ProjetoItem(0, '', [''], '');

    listaProj: ProjetoItem[] = []

    constructor(
        private service: ProjetosService
    ) {}

    ngOnInit(): void {
        this.service.buscarProjetos().subscribe(
            (dados) => {
                console.log(dados);

                dados.data.forEach(element => {                                        
                    this.listaProj.push(element);
                });
            },
            (e) => {
                console.log(e);
            }
        );
    }
}