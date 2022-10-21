import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './portfolio/components/admin/admin.component';
import { AddExperienciaComponent } from './portfolio/components/experiencias/add-experiencia/add-experiencia.component';
import { ExperienciasComponent } from './portfolio/components/experiencias/experiencias.component';
import { MainPageComponent } from './portfolio/components/main-page/main-page.component';

import { CardMakerComponent } from './projects/card-maker/card-maker.component';
import { ChampionSelectComponent } from './projects/champion-select/champion-select.component';
import { MarvelAppComponent } from './projects/marvel-app/marvel-app.component';
import { ReceitasMeyryComponent } from './projects/receitas-meyry/receitas-meyry.component';
import { RevelationTeaComponent } from './projects/revelation-tea/revelation-tea.component';
import { ToDoListComponent } from './projects/to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'    
  },
  {
    path: 'home',
    component: MainPageComponent
  },
  {
    path: 'experiencias',
    component: ExperienciasComponent
  },
  {
    path: 'champion-select',
    component: ChampionSelectComponent
  },
  {
    path: 'cha-revelacao',
    component: RevelationTeaComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: 
    [
      {
        path: 'new',
        component: AddExperienciaComponent
      }
    ]
  },
  {
    path: 'trainer-card-maker',
    component: CardMakerComponent
  },
  {
    path: 'to-do-list',
    component: ToDoListComponent
  },
  {
    path: 'marvel-app',
    component: MarvelAppComponent
  },
  {
    path: 'receitas-meyry',
    component: ReceitasMeyryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
