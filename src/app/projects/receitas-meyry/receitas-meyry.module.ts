import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ReceitasMeyryComponent } from "./receitas-meyry.component";

@NgModule({
    declarations: [
        ReceitasMeyryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ReceitasMeyryComponent
    ],
    providers: [
    ]
})
export class ReceitasMeyryModule {}