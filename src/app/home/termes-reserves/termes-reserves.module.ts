import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermesReservesRoutingModule } from './termes-reserves-routing.module';
import { AddtagComponent } from './addtag/addtag.component';
import { ListertagsComponent } from './listertags/listertags.component';
import { AddReserveComponent } from './add-reserve/add-reserve.component';
import { ListerReservesComponent } from './lister-reserves/lister-reserves.component';

import { GestionAutorisationComponent } from './gestion-autorisation/gestion-autorisation.component';

@NgModule({
  declarations: [AddtagComponent, ListertagsComponent, AddReserveComponent, ListerReservesComponent, GestionAutorisationComponent],
  imports: [
    CommonModule,
    TermesReservesRoutingModule
  ]
})
export class TermesReservesModule { }
