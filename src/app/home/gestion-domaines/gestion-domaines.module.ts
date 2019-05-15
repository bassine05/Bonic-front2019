import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionDomainesRoutingModule } from './gestion-domaines-routing.module';
import { ListedomainesComponent } from './listedomaines/listedomaines.component';
import { AddextensionsComponent } from './addextensions/addextensions.component';
import { ConsulterextensionsComponent } from './consulterextensions/consulterextensions.component';

@NgModule({
  declarations: [ListedomainesComponent, AddextensionsComponent, ConsulterextensionsComponent],
  imports: [
    CommonModule,
    GestionDomainesRoutingModule
  ]
})
export class GestionDomainesModule { }
