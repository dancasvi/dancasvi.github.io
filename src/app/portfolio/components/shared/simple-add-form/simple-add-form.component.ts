import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ExperienciasService } from "../../experiencias/experiencias.service";
import { BaseAPI } from "../base-api/base-api.component";
import { CustomFormField } from "./custom-form-field";

@Component({
    selector: 'app-simple-add-form',
    templateUrl: 'simple-add-form.component.html',
    styleUrls: ['simple-add-form.component.scss']    
})
export class SimpleAddFormComponent implements OnInit{
    
    @Input() formFields: CustomFormField<string>[] = [];
    @Input() data: {entity, id};
    form: FormGroup;
    payLoad = ' ';

    constructor(
        private formfieldService: ExperienciasService,
        private baseApi: BaseAPI
    ) { }

    ngOnInit(): void {               
        this.form = this.formfieldService.toFormGroup(this.formFields);

        this.baseApi.buscarPorId(this.data.entity, this.data.id).subscribe(
            (dados) => {
                if(dados.status == 1) {
                    this.formFields.forEach(element => {                        
                        Object.keys(dados.data[0]).forEach(index => {                         
                            if(element.key == index) {                                
                                element.value = dados.data[0][index];
                            }
                        });
                    });
                    this.form = this.formfieldService.toFormGroup(this.formFields);
                }                
        }),
        (e) => {
        }
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.getRawValue());
    }
}