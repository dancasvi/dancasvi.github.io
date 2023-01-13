import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ReceitasMeyryComponent } from "./receitas-meyry.component";
import { CadastroReceitaComponent } from "./cadastro-receita/cadastro-receita.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        ReceitasMeyryComponent,
        CadastroReceitaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        ReceitasMeyryComponent,
        CadastroReceitaComponent
    ],
    providers: [
    ]
})
export class ReceitasMeyryModule {}