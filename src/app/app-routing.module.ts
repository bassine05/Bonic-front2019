import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { GestionUsersComponent } from './home/gestion-users/gestion-users.component';
import { UserComponent } from './home/gestion-users/user/user.component';
import { ListeusersComponent } from './home/gestion-users/listeusers/listeusers.component';
import { AdduserComponent } from './home/gestion-users/adduser/adduser.component';

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
  {path:'auth',component:AuthComponent},
  { path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
