import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ExperienciaItem, ExperienciaWrapperDTO } from "../../models/experiencias.model";
import { ExperienciasService } from "../experiencias/experiencias.service";
import { CustomFormField } from "../shared/simple-add-form/custom-form-field";
import { AdminMenuOptions } from "./admin-types";

@Component({
    selector: 'app-admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.scss']
})
export class AdminComponent implements OnInit {
    selectedMenu = 5;
    table;

    formFields: Observable<CustomFormField<any>[]>;
    data: {entity, id};

    constructor(
        private router: Router,
        private servico: ExperienciasService
    ) {}

    ngOnInit(): void {
        // this.formFields = this.servico.getFormFields();
    }
    
    public navigateTo(menuOption) {
        switch(menuOption) {            
            case AdminMenuOptions.EXPERIENCIAS:
                this.loadExperiences();
                this.selectedMenu = 0;
                break;
            case AdminMenuOptions.PROJETOS:
                this.selectedMenu = 1;
                break;
            case AdminMenuOptions.ENTRAR:
                this.selectedMenu = 2;
                break;
            default:
                break;
        }

        var heightPage = document.body.scrollHeight;
        window.scrollTo(0 , heightPage);
    }

    private loadExperiences() {
        this.servico.buscarExperiencias().subscribe(
            (dados:ExperienciaWrapperDTO<ExperienciaItem[]>) => {
                if(dados.status == 1) {
                    let columns = ['ID', 'Cargo', 'Empresa'];
                    let rows = [];

                    dados.data.forEach(element => {                        
                        rows.push({id: element.id, cargo: element.cargo, empresa: element.nomeEmpresa});
                    });

                    this.table = {entity: 'experiencias', columns, rows};
                }                
            },
            (e) => {
            }
        );
    }

    onAction({action, entity, id}) {
        switch(action) {
            case 'search':
                this.formFields = this.servico.getFormFields();
                this.data = {entity, id};
                break;
            case '':
                break;
            case '':
                break;
        }
    }
}