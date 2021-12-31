import { Component, OnInit } from "@angular/core";
import { ExperienciaItem, ExperienciaWrapperDTO } from "../../models/experiencias.model";
import { ExperienciasService } from "./experiencias.service";

@Component({
    selector: 'app-experiencias',
    templateUrl: 'experiencias.component.html',
    styleUrls: ['experiencias.component.scss']
})
export class ExperienciasComponent implements OnInit {    
    itemExp = new ExperienciaItem();

    listaExp: ExperienciaItem[] = [];

    constructor(private servico: ExperienciasService) {}

    ngOnInit(): void {
        this.servico.buscarExperiencias().subscribe(
            (dados:ExperienciaWrapperDTO<ExperienciaItem[]>) => {
                if(dados.status == 1) {
                    this.listaExp = dados.data;
                }                
            },
            (e) => {
                console.log(e);
            }
        );
    }
}