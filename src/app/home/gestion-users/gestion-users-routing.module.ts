import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { GestionUsersComponent } from './gestion-users.component';
import { ListeusersComponent } from './listeusers/listeusers.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  {path: 'users',component: GestionUsersComponent,
  children:[
    {path: 'user',component: UserComponent},
    {path: 'listeusers',component: ListeusersComponent},
    {path: 'adduser',component: AdduserComponent}
  ],
}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUsersRoutingModule { }
