import { Component, OnInit } from "@angular/core";
import { MockDataService } from "src/app/mock-db/mock-data.service";
import { STProjectsDTO } from "../../seatable-database/models/seatable-models";
import { SeaTableDBService } from "../../seatable-database/services/seatable-db.service";
// import { ProjetoItem } from "../../models/projetos.model";
import { ProjetoItem, ProjetoItemMock } from "./projetos.model";
import { ProjetosService } from "./projetos.service";

@Component({
    selector: 'app-projetos',
    templateUrl: 'projetos.component.html',
    styleUrls: ['projetos.component.scss']
})
export class ProjetosComponent implements OnInit {
    itemProj// = new ProjetoItem(0, '', [''], '');

    listaProj: ProjetoItem[] = []

    stListaProj: STProjectsDTO[] = [];

    mockListaProj: ProjetoItemMock[] = [];

    constructor(
        private service: ProjetosService,
        private seaTableDBService: SeaTableDBService,
        private mockDataService: MockDataService
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
                // console.log(e);
                console.log("Falha ao buscar pela API padrão, acessando SeaTable");
                this.buscarProjetosViaSeaTable();
            }
        );
    }

    private buscarProjetosViaSeaTable() {
        this.seaTableDBService.buscarProjetos().subscribe(
            (dados) => {
                dados.rows.forEach(element => {
                    this.stListaProj.push(element);
                });
            },
            (e) => {
                // console.log(e);
                console.log("Falha ao buscar pela API SeaTable, acessando Mock");
                this.buscarProjetosViaMock();
            }
        );
    }

    private buscarProjetosViaMock() {
        let myJson;
        this.mockDataService.getProjects().subscribe(data => {
            // console.log(data);
            myJson = eval(data);
            myJson.forEach(element => {
                this.mockListaProj.push(element);
            });
        });
    }
}