import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { UserComponent } from './gestion-users/user/user.component';
import { ListeusersComponent } from './gestion-users/listeusers/listeusers.component';
import { AdduserComponent } from './gestion-users/adduser/adduser.component';

const routes: Routes = [
  {path:'accueil',component: HomeComponent,
  children:[
    {path: 'dashboard',component: DashboardComponent},
    {path: 'users',component: GestionUsersComponent,
      children:[
        {path: 'user',component: UserComponent},
        {path: 'listeusers',component: ListeusersComponent},
        {path: 'adduser',component: AdduserComponent}
      ],
    }
  ],
},
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
