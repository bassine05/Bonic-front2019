import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { GestionUsersModule } from './gestion-users/gestion-users.module';
import { GestionComptesRegistrarsComponent } from './gestion-comptes-registrars/gestion-comptes-registrars.component';
import { GestionRegistrarsComponent } from './gestion-registrars/gestion-registrars.component';
import { TermesPremiumsComponent } from './termes-premiums/termes-premiums.component';
import { TermesReservesComponent } from './termes-reserves/termes-reserves.component';
import { GestionComptesRegistrarsModule } from './gestion-comptes-registrars/gestion-comptes-registrars.module';
import { GestionRegistrarsModule } from './gestion-registrars/gestion-registrars.module';
import { GestionDomainesModule } from './gestion-domaines/gestion-domaines.module';
import { TermesPremiumsModule } from './termes-premiums/termes-premiums.module';
import { TermesReservesModule } from './termes-reserves/termes-reserves.module';
import { GestionDomainesComponent } from './gestion-domaines/gestion-domaines.component';
import { GestionAutorisationModule } from './termes-reserves/gestion-autorisation/gestion-autorisation.module';


@NgModule({
  declarations: [DashboardComponent, GestionUsersComponent, GestionComptesRegistrarsComponent, GestionRegistrarsComponent, TermesPremiumsComponent, TermesReservesComponent,GestionDomainesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GestionUsersModule,
    GestionComptesRegistrarsModule,
    GestionRegistrarsModule,
    GestionDomainesModule,
    TermesPremiumsModule,
    TermesReservesModule,
    GestionAutorisationModule
  ]
})
export class HomeModule { }
