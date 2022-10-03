import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProjetoItemComponent } from "./projeto-item/projeto-item.component";
import { ProjetosComponent } from "./projetos.component";

@NgModule({
    declarations: [
        ProjetosComponent,
        ProjetoItemComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
        ProjetosComponent,
        ProjetoItemComponent
    ],
    providers: [
    ]
})
export class ProjetosModule {}