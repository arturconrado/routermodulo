import { CursosRoutingModule } from './cursos.routing.module';
import { CommonModule } from '@angular/common';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  providers: [CursosService],
})
export class CursosModule { }
