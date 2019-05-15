import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionComptesRegistrarsRoutingModule } from './gestion-comptes-registrars-routing.module';
import { AddcomptesComponent } from './addcomptes/addcomptes.component';
import { ListecomptesComponent } from './listecomptes/listecomptes.component';
import { SearchcompteComponent } from './searchcompte/searchcompte.component';

@NgModule({
  declarations: [AddcomptesComponent, ListecomptesComponent, SearchcompteComponent],
  imports: [
    CommonModule,
    GestionComptesRegistrarsRoutingModule
  ]
})
export class GestionComptesRegistrarsModule { }
