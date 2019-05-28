import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermesReservesComponent } from './termes-reserves.component';
import { AddReserveComponent } from './add-reserve/add-reserve.component';
import { AddtagComponent } from './addtag/addtag.component';
import { ListerReservesComponent } from './lister-reserves/lister-reserves.component';
import { ListertagsComponent } from './listertags/listertags.component';
import { GestionAutorisationComponent } from './gestion-autorisation/gestion-autorisation.component';
import { ListerdemandesComponent } from './gestion-autorisation/listerdemandes/listerdemandes.component';

const routes: Routes = [
  {path: 'reserver',component: TermesReservesComponent,
  children:[
    {path: 'addreserver',component: AddReserveComponent},
    {path: 'addtag',component: AddtagComponent},
    {path: 'listerreservers',component: ListerReservesComponent},
    {path: 'listertags',component: ListertagsComponent},
    {path: 'autorisation',component: GestionAutorisationComponent,
    children:[
      {path: 'listerdemande',component: ListerdemandesComponent}
    ],
  }
  ],
}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermesReservesRoutingModule { }
