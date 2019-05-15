import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionRegistrarsComponent } from './gestion-registrars.component';
import { AddregistrarComponent } from './addregistrar/addregistrar.component';
import { ListeregistrarsComponent } from './listeregistrars/listeregistrars.component';
import { SearchregistrarComponent } from './searchregistrar/searchregistrar.component';
import { FactureregistrarComponent } from './factureregistrar/factureregistrar.component';

const routes: Routes = [
  {path: 'registrars',component: GestionRegistrarsComponent,
  children:[
    {path: 'addregistrar',component: AddregistrarComponent},
    {path: 'listeregistrars',component: ListeregistrarsComponent},
    {path: 'searchregistrar',component: SearchregistrarComponent},
    {path: 'factureregistrar',component: FactureregistrarComponent}
  ],
}
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRegistrarsRoutingModule { }
