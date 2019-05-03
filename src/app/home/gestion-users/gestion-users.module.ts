import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUsersRoutingModule } from './gestion-users-routing.module';
import { UserComponent } from './user/user.component';
import { ListeusersComponent } from './listeusers/listeusers.component';
import { AdduserComponent } from './adduser/adduser.component';

@NgModule({
  declarations: [UserComponent,ListeusersComponent, AdduserComponent],
  imports: [
    CommonModule,
    GestionUsersRoutingModule
  ]
})
export class GestionUsersModule { }
