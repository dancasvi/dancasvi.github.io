import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild } from "@angular/core";
import { MockDataService } from "src/app/mock-db/mock-data.service";
import { ExperienciaItem, ExperienciaItemMock, ExperienciaWrapperDTO } from "../../models/experiencias.model";
import { ExperienciasService } from "./experiencias.service";

@Component({
    selector: 'app-experiencias',
    templateUrl: 'experiencias.component.html',
    styleUrls: ['experiencias.component.scss']
})
export class ExperienciasComponent implements OnInit, AfterViewInit {    
    itemExp = new ExperienciaItem();

    listaExp: ExperienciaItem[] = [];
    mockListaExp: ExperienciaItemMock[] = [];

    constructor(
        private servico: ExperienciasService,
        private mockDataService: MockDataService
    ) {}

    ngOnInit(): void {
        this.servico.buscarExperiencias().subscribe(
            (dados:ExperienciaWrapperDTO<ExperienciaItem[]>) => {
                if(dados.status == 1) {
                    this.listaExp = dados.data;
                }                
            },
            (e) => {
                console.log("Falha ao buscar pela API padrão, acessando via mock");
                this.buscarProjetosViaMock();
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

    private buscarProjetosViaMock() {
        let myJson;
        this.mockDataService.getExperiences().subscribe(data => {
            myJson = eval(data);console.log(myJson)
            myJson.forEach(element => {
                this.mockListaExp.push(element);
            });
        });
    }
}