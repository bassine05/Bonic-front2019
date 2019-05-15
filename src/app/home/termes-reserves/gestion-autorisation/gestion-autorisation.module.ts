import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAutorisationRoutingModule } from './gestion-autorisation-routing.module';
import { GenerateCodeComponent } from './generate-code/generate-code.component';
import { ListerdemandesComponent } from './listerdemandes/listerdemandes.component';

@NgModule({
  declarations: [GenerateCodeComponent, ListerdemandesComponent],
  imports: [
    CommonModule,
    GestionAutorisationRoutingModule
  ]
})
export class GestionAutorisationModule { }
