import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRegistrarsRoutingModule } from './gestion-registrars-routing.module';
import { AddregistrarComponent } from './addregistrar/addregistrar.component';
import { ListeregistrarsComponent } from './listeregistrars/listeregistrars.component';
import { SearchregistrarComponent } from './searchregistrar/searchregistrar.component';
import { FactureregistrarComponent } from './factureregistrar/factureregistrar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddregistrarComponent, ListeregistrarsComponent, SearchregistrarComponent, FactureregistrarComponent],
  imports: [
    CommonModule,
    FormsModule,
    GestionRegistrarsRoutingModule
  ]
})
export class GestionRegistrarsModule { }
