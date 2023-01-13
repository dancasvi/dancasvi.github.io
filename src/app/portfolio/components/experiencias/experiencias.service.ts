import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ExperienciaItem, ExperienciaWrapperDTO } from "../../models/experiencias.model";
import { CustomFormField } from "../shared/simple-add-form/custom-form-field";
import { FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { of } from "rxjs";

const URL = 'http://dancasvi.com.br:21012';

@Injectable({ providedIn: 'root' })
export class ExperienciasService {
    constructor(private http: HttpClient) {

    }
    
    buscarExperiencias() {
        return this.http.get(`${URL}/experiencias`)
        .pipe(map((dados:ExperienciaWrapperDTO<ExperienciaItem[]>) => dados));
    }

    buscarExperienciaPorId(id) {
      return this.http.get(`${URL}/experiencias/${id}`)
      .pipe(map((dados:ExperienciaWrapperDTO<ExperienciaItem>) => dados));
    }

    getExperienceFields() {

    }

    toFormGroup(inputs: CustomFormField<string>[]): FormGroup {
        const group: any = {};
        inputs.forEach(input => {
          let validator: ValidatorFn[] = input.required ? [Validators.required] : [];
          switch (input.validator) {
            case "email":
              validator.push(Validators.email);
              break;
            default:
              break;
          }
          group[input.key] = validator.length > 0 ? new FormControl(input.value || '', validator)
                                            : new FormControl(input.value || '');
        });
    
        return new FormGroup(group);
    }

    getFormFields() {

        const inputs: CustomFormField<string>[] = [
    
          new CustomFormField<string>({
            controlType: "textbox",
            key: 'cargo',
            label: 'Cargo',
            required: true,
            order: 1
          }),

          new CustomFormField<string>({
            controlType: "textbox",
            key: 'nomeEmpresa',
            label: 'Empresa',
            required: true,
            order: 2
          }),

          new CustomFormField<string>({
            controlType: "textbox",
            key: 'dataInicio',
            label: 'Data de Início',
            required: true,
            order: 3
          }),

          new CustomFormField<string>({
            controlType: "date",
            key: 'dataFim',
            label: 'Data de Fim',
            required: true,
            order: 4
          }),

          new CustomFormField<string>({
            controlType: "textarea",
            key: 'descricao',
            label: 'Atividades',
            required: true,
            order: 5
          }),

          // new CustomFormField<string>({
          //   controlType: "textbox",
          //   key: 'email',
          //   label: 'Email',
          //   type: 'email',
          //   required: true,
          //   validator: "email",
          //   order: 2
          // }),
    
          // new CustomFormField<string>({
          //   controlType: "dropdown",
          //   key: 'country',
          //   label: 'Country',
          //   options: [
          //     {key: 'usa',  value: 'United States of America'},
          //     {key: 'br',  value: 'Brazil'},
          //     {key: 'other',   value: 'Other'}
          //   ],
          //   order: 3
          // }),
    
          // new CustomFormField<string>({
          //   controlType: "checkbox",
          //   key: 'agree',
          //   label: 'I accept terms and services',
          //   type: 'checkbox',
          //   required: true,
          //   order: 4
          // }),
    
          // new CustomFormField<string>({
          //   controlType: "radio",
          //   key: 'sex',
          //   label: 'Sex',
          //   type: 'radio',
          //   options: [
          //     {key: 'male',  value: 'Male'},
          //     {key: 'female',  value: 'Female'}
          //   ],
          //   order: 5
          // }),
    
          // new CustomFormField<string>({
          //   controlType: "textarea",
          //   key: 'message',
          //   label: 'Mesage',
          //   type: 'textarea',
          //   order: 6
          // })
        ];
    
        return of(inputs.sort((a, b) => a.order - b.order));
    }
    
}