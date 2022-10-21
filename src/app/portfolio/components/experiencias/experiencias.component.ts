import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild } from "@angular/core";
import { ExperienciaItem, ExperienciaWrapperDTO } from "../../models/experiencias.model";
import { ExperienciasService } from "./experiencias.service";

@Component({
    selector: 'app-experiencias',
    templateUrl: 'experiencias.component.html',
    styleUrls: ['experiencias.component.scss']
})
export class ExperienciasComponent implements OnInit, AfterViewInit {    
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
            }
        );
    }

    @ViewChild('items') input;

    public ngAfterViewInit() {
        this.input.nativeElement.addEventListener("wheel", event => {
            event.preventDefault();
            if(event.deltaY > 0) {
                event.target.scrollBy(300, 0);
            } else {
                event.target.scrollBy(-300, 0);
            }
        });
    }
}