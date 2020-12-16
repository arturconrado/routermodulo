import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormularioComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule
  ],
  exports: [],
  providers: [],
})
export class AlunosModule { }
