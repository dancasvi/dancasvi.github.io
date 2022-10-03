import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExperienciaItemComponent } from "./experiencia-item/experiencia-item.component";
import { ExperienciasComponent } from "./experiencias.component";

@NgModule({
    declarations: [
        ExperienciasComponent,
        ExperienciaItemComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
        ExperienciasComponent,
        ExperienciaItemComponent
    ],
    providers: [
    ]
})
export class ExperienciasModule {}