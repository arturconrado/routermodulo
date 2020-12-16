import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';

const alunosRoutes = [
  {
    path: 'alunos', component: AlunosComponent, children: [
      { path: 'novo', component: AlunoFormularioComponent },
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: AlunoFormularioComponent }
    ]
  },

];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forChild(alunosRoutes)
  ],
  exports: [RouterModule],
  providers: [],
})
export class AlunosRoutingModule { }
