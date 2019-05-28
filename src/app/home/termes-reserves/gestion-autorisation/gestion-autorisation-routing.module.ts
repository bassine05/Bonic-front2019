import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionAutorisationComponent } from './gestion-autorisation.component';
import { ListerdemandesComponent } from './listerdemandes/listerdemandes.component';

const routes: Routes = [
  {path: 'autorisation',component: GestionAutorisationComponent,
  children:[
    {path: 'listerdemande',component: ListerdemandesComponent}
  ],
}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAutorisationRoutingModule { }
