import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermesPremiumsRoutingModule } from './termes-premiums-routing.module';
import { AddcategorieComponent } from './addcategorie/addcategorie.component';
import { ListercategorieComponent } from './listercategorie/listercategorie.component';
import { AddPremiumComponent } from './add-premium/add-premium.component';
import { ListerPremiumsComponent } from './lister-premiums/lister-premiums.component';
import { GestionTarificationComponent } from './gestion-tarification/gestion-tarification.component';

@NgModule({
  declarations: [AddcategorieComponent, ListercategorieComponent, AddPremiumComponent, ListerPremiumsComponent, GestionTarificationComponent],
  imports: [
    CommonModule,
    TermesPremiumsRoutingModule
  ]
})
export class TermesPremiumsModule { }
