import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CardMakerModule } from "src/app/projects/card-maker/card-maker.module";
import { ChampionSelectModule } from "src/app/projects/champion-select/champion-select.module";
import { ChatInboxModule } from "src/app/projects/chat-inbox/chat-inbox.module";
import { RevelationTeaModule } from "src/app/projects/revelation-tea/revelation-tea.module";
import { AdminModule } from "../admin/admin.module";
import { ContatoModule } from "../contato/contato.module";
import { ExperienciasModule } from "../experiencias/experiencias.module";
import { ProjetosModule } from "../projetos/projetos.module";
import { MenuModule } from "../shared/menu/menu.module";
import { SimpleTableModule } from "../shared/simple-table/simple-table.module";
import { MainPageComponent } from "./main-page.component";

@NgModule({
    declarations: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        MenuModule,
        ExperienciasModule,
        ProjetosModule,
        ContatoModule,
        ChampionSelectModule,
        RevelationTeaModule,
        AdminModule,
        SimpleTableModule,
        CardMakerModule,
        ChatInboxModule
    ],
    exports: [
        MainPageComponent
    ],
    providers: [
    ]
})
export class MainPageModule {}