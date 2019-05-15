import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionComptesRegistrarsComponent } from './gestion-comptes-registrars.component';
import { AddcomptesComponent } from './addcomptes/addcomptes.component';
import { ListecomptesComponent } from './listecomptes/listecomptes.component';
import { SearchcompteComponent } from './searchcompte/searchcompte.component';

const routes: Routes = [
  {path: 'comptes',component: GestionComptesRegistrarsComponent,
  children:[
    {path: 'addcomptes',component: AddcomptesComponent},
    {path: 'listcomptes',component: ListecomptesComponent},
    {path: 'searchcomptes',component: SearchcompteComponent}
  ],
}
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionComptesRegistrarsRoutingModule { }
