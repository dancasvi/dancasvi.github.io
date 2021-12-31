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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,    
    NgbModule,
    MenuModule,
    ExperienciasModule,
    ProjetosModule,
    ContatoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
