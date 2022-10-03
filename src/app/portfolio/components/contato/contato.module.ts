import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContatoComponent } from "./contato.component";

@NgModule({
    declarations: [
        ContatoComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
        ContatoComponent
    ],
    providers: [
    ]
})
export class ContatoModule {}