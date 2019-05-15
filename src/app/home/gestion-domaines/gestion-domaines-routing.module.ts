import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionDomainesComponent } from './gestion-domaines.component';
import { AddextensionsComponent } from './addextensions/addextensions.component';
import { ListedomainesComponent } from './listedomaines/listedomaines.component';
import { ConsulterextensionsComponent } from './consulterextensions/consulterextensions.component';

const routes: Routes = [
  {path: 'domaines',component: GestionDomainesComponent,
  children:[
    {path: 'addextension',component: AddextensionsComponent},
    {path: 'listerdomaines',component: ListedomainesComponent},
    {path: 'consulterextensions',component: ConsulterextensionsComponent}
  ],
}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDomainesRoutingModule { }
