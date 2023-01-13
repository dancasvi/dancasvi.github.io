import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciasModule } from './portfolio/components/experiencias/experiencias.module';
import { MenuModule } from './portfolio/components/shared/menu/menu.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjetosModule } from './portfolio/components/projetos/projetos.module';
import { ContatoModule } from './portfolio/components/contato/contato.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChampionSelectModule } from './projects/champion-select/champion-select.module';
import { RevelationTeaModule } from './projects/revelation-tea/revelation-tea.module';
import { AdminModule } from './portfolio/components/admin/admin.module';
import { SimpleTableModule } from './portfolio/components/shared/simple-table/simple-table.module';
import { MainPageModule } from './portfolio/components/main-page/main-page.module';
import { SimpleAddFormModule } from './portfolio/components/shared/simple-add-form/simple-add-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardMakerModule } from './projects/card-maker/card-maker.module';
import { ToDoListModule } from './projects/to-do-list/to-do-list.module';
import { ChatInboxModule } from './projects/chat-inbox/chat-inbox.module';
import { MarvelAppModule } from './projects/marvel-app/marvel-app.module';
import { ReceitasMeyryModule } from './projects/receitas-meyry/receitas-meyry.module';
import { SuperTrunfoModule } from './projects/super-trunfo/super-trunfo.module';
import { PokedexModule } from './projects/pokedex/pokedex.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    MenuModule,
    ExperienciasModule,
    ProjetosModule,
    ContatoModule,
    ChampionSelectModule,
    RevelationTeaModule,
    AdminModule,    
    MainPageModule,
    //projects
    ToDoListModule,
    ChatInboxModule,
    MarvelAppModule,
    ReceitasMeyryModule,
    SuperTrunfoModule,
    PokedexModule,
    //shared components
    SimpleTableModule,
    SimpleAddFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
