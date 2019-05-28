import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { GestionUsersComponent } from './home/gestion-users/gestion-users.component';
import { UserComponent } from './home/gestion-users/user/user.component';
import { ListeusersComponent } from './home/gestion-users/listeusers/listeusers.component';
import { AdduserComponent } from './home/gestion-users/adduser/adduser.component';
import { GestionComptesRegistrarsComponent } from './home/gestion-comptes-registrars/gestion-comptes-registrars.component';
import { AddcomptesComponent } from './home/gestion-comptes-registrars/addcomptes/addcomptes.component';
import { ListecomptesComponent } from './home/gestion-comptes-registrars/listecomptes/listecomptes.component';
import { SearchcompteComponent } from './home/gestion-comptes-registrars/searchcompte/searchcompte.component';
import { GestionRegistrarsComponent } from './home/gestion-registrars/gestion-registrars.component';
import { AddregistrarComponent } from './home/gestion-registrars/addregistrar/addregistrar.component';
import { ListeregistrarsComponent } from './home/gestion-registrars/listeregistrars/listeregistrars.component';
import { SearchregistrarComponent } from './home/gestion-registrars/searchregistrar/searchregistrar.component';
import { FactureregistrarComponent } from './home/gestion-registrars/factureregistrar/factureregistrar.component';
import { GestionDomainesComponent } from './home/gestion-domaines/gestion-domaines.component';
import { AddextensionsComponent } from './home/gestion-domaines/addextensions/addextensions.component';
import { ListedomainesComponent } from './home/gestion-domaines/listedomaines/listedomaines.component';
import { ConsulterextensionsComponent } from './home/gestion-domaines/consulterextensions/consulterextensions.component';
import { TermesPremiumsComponent } from './home/termes-premiums/termes-premiums.component';
import { AddPremiumComponent } from './home/termes-premiums/add-premium/add-premium.component';
import { AddcategorieComponent } from './home/termes-premiums/addcategorie/addcategorie.component';
import { ListerPremiumsComponent } from './home/termes-premiums/lister-premiums/lister-premiums.component';
import { ListercategorieComponent } from './home/termes-premiums/listercategorie/listercategorie.component';
import { GestionTarificationComponent } from './home/termes-premiums/gestion-tarification/gestion-tarification.component';
import { TermesReservesComponent } from './home/termes-reserves/termes-reserves.component';
import { AddReserveComponent } from './home/termes-reserves/add-reserve/add-reserve.component';
import { AddtagComponent } from './home/termes-reserves/addtag/addtag.component';
import { ListerReservesComponent } from './home/termes-reserves/lister-reserves/lister-reserves.component';
import { ListertagsComponent } from './home/termes-reserves/listertags/listertags.component';
import { GestionAutorisationComponent } from './home/termes-reserves/gestion-autorisation/gestion-autorisation.component';
import { ListerdemandesComponent } from './home/termes-reserves/gestion-autorisation/listerdemandes/listerdemandes.component';
import { DocumentationComponent } from './home/documentation/documentation.component';
const routes: Routes = [
  {path:'accueil',component: HomeComponent,
  children:[
    {path: 'dashboard',component: DashboardComponent},
    {path: 'documentation',component: DocumentationComponent},
    {path: 'users',component: GestionUsersComponent,
      children:[
        {path: 'user',component: UserComponent},
        {path: 'listeusers',component: ListeusersComponent},
        {path: 'adduser',component: AdduserComponent}
      ],
    },
    {path: 'comptes',component: GestionComptesRegistrarsComponent,
      children:[
        {path: 'addcomptes',component: AddcomptesComponent},
        {path: 'listcomptes',component: ListecomptesComponent},
        {path: 'searchcomptes',component: SearchcompteComponent}
      ],
    },
    {path: 'registrars',component: GestionRegistrarsComponent,
    children:[
      {path: 'addregistrar',component: AddregistrarComponent},
      {path: 'listeregistrars',component: ListeregistrarsComponent},
      {path: 'searchregistrar',component: SearchregistrarComponent},
      {path: 'factureregistrar',component: FactureregistrarComponent}
    ],
    },

    {path: 'domaines',component: GestionDomainesComponent,
  children:[
    {path: 'addextension',component: AddextensionsComponent},
    {path: 'listerdomaines',component: ListedomainesComponent},
    {path: 'consulterextensions',component: ConsulterextensionsComponent}
  ],
  }, 
  {path: 'premium',component: TermesPremiumsComponent,
  children:[
    {path: 'addpremium',component: AddPremiumComponent},
    {path: 'addcategorie',component: AddcategorieComponent},
    {path: 'listerpremiums',component: ListerPremiumsComponent},
    {path: 'listercategories',component: ListercategorieComponent},
    {path: 'tarification',component: GestionTarificationComponent}
  ],
  },
  {path: 'reserver',component: TermesReservesComponent,
  children:[
    {path: 'addreserver',component: AddReserveComponent},
    {path: 'addtag',component: AddtagComponent},
    {path: 'listerreservers',component: ListerReservesComponent},
    {path: 'listertags',component: ListertagsComponent},
    {path: 'autorisation',component: GestionAutorisationComponent,
    children:[
      {path: 'listerdemande',component: ListerdemandesComponent}
    ],
  }
  ],
}, 

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
