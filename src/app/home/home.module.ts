import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { GestionUsersModule } from './gestion-users/gestion-users.module';



@NgModule({
  declarations: [DashboardComponent, GestionUsersComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GestionUsersModule,

  ]
})
export class HomeModule { }
