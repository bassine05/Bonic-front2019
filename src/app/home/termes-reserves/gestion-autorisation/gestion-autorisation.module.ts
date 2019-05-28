import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAutorisationRoutingModule } from './gestion-autorisation-routing.module';
import { ListerdemandesComponent } from './listerdemandes/listerdemandes.component';

@NgModule({
  declarations: [ListerdemandesComponent],
  imports: [
    CommonModule,
    GestionAutorisationRoutingModule
  ]
})
export class GestionAutorisationModule { }
