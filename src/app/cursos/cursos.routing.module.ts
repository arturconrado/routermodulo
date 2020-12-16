import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const cursosRoute: Routes = [
  { path: 'curso/:id', component: CursoDetalheComponent }
];



@NgModule({
  imports:[RouterModule.forChild(cursosRoute)],
  exports:[RouterModule]
})
export class CursosRoutingModule {

}
