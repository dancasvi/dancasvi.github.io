import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciasComponent } from './portfolio/components/experiencias/experiencias.component';

const routes: Routes = [
  {
    path: 'experiencias',
    component: ExperienciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
