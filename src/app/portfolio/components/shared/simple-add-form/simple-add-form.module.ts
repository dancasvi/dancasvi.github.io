import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicFormInputComponent } from "../dynamic-form-input/dynamic-form-input.component";
import { SimpleAddFormComponent } from "./simple-add-form.component";

@NgModule({
    declarations: [
        SimpleAddFormComponent,
        DynamicFormInputComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule
    ],
    exports: [
        SimpleAddFormComponent,
        DynamicFormInputComponent
    ],
    providers: [
    ]
})
export class SimpleAddFormModule {}