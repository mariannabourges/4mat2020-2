import { ConsultaFormComponent } from './consulta/consulta-form/consulta-form.component';
import { ConsultaListComponent } from './consulta/consulta-list/consulta-list.component';

import { VeterinarioFormComponent } from './veterinario/veterinario-form/veterinario-form.component';
import { VeterinarioListComponent } from './veterinario/veterinario-list/veterinario-list.component';

import { RacaListComponent } from './raca/raca-list/raca-list.component';

import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';

import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { TurmaFormComponent } from './turma/turma-form/turma-form.component';

import { AnimalListComponent } from './animal/animal-list/animal-list.component';
import { AnimalFormComponent } from './animal/animal-form/animal-form.component';




const routes: Routes = [
    // Rotas no Angular NUNCA começam com /
    { path: 'curso', component: CursoListComponent },
    { path: 'curso/novo', component: CursoFormComponent},
    { path: 'curso/:id', component: CursoFormComponent },

    { path: 'turma', component: TurmaListComponent },
    { path: 'turma/novo', component: TurmaFormComponent },
    { path: 'turma/:id', component: TurmaFormComponent },

    {path: 'cliente', component: ClienteListComponent},
    {path: 'cliente/novo', component: ClienteFormComponent},
    {path: 'cliente/:id', component: ClienteFormComponent},
    
    {path: 'animal', component: AnimalListComponent},
    {path: 'animal/novo', component: AnimalFormComponent},
    {path: 'animal/:id', component: AnimalFormComponent},

    {path: 'raca', component: RacaListComponent},

    {path: 'consulta', component: ConsultaListComponent},
    {path: 'consulta/novo', component: ConsultaFormComponent },
    {path: 'consulta/:id', component: ConsultaFormComponent},

    {path: 'veterinario', component: VeterinarioListComponent},
    {path: 'veterinario/novo', component: VeterinarioFormComponent},
    {path: 'veterinario/:id', component: VeterinarioFormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }