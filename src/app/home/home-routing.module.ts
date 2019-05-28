import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { UserComponent } from './gestion-users/user/user.component';
import { ListeusersComponent } from './gestion-users/listeusers/listeusers.component';
import { AdduserComponent } from './gestion-users/adduser/adduser.component';
import { GestionComptesRegistrarsComponent } from './gestion-comptes-registrars/gestion-comptes-registrars.component';
import { AddcomptesComponent } from './gestion-comptes-registrars/addcomptes/addcomptes.component';
import { ListecomptesComponent } from './gestion-comptes-registrars/listecomptes/listecomptes.component';
import { SearchcompteComponent } from './gestion-comptes-registrars/searchcompte/searchcompte.component';
import { GestionRegistrarsComponent } from './gestion-registrars/gestion-registrars.component';
import { AddregistrarComponent } from './gestion-registrars/addregistrar/addregistrar.component';
import { ListeregistrarsComponent } from './gestion-registrars/listeregistrars/listeregistrars.component';
import { SearchregistrarComponent } from './gestion-registrars/searchregistrar/searchregistrar.component';
import { FactureregistrarComponent } from './gestion-registrars/factureregistrar/factureregistrar.component';
import { GestionDomainesComponent } from './gestion-domaines/gestion-domaines.component';
import { AddextensionsComponent } from './gestion-domaines/addextensions/addextensions.component';
import { ListedomainesComponent } from './gestion-domaines/listedomaines/listedomaines.component';
import { ConsulterextensionsComponent } from './gestion-domaines/consulterextensions/consulterextensions.component';
import { TermesPremiumsComponent } from './termes-premiums/termes-premiums.component';
import { AddPremiumComponent } from './termes-premiums/add-premium/add-premium.component';
import { AddcategorieComponent } from './termes-premiums/addcategorie/addcategorie.component';
import { ListerPremiumsComponent } from './termes-premiums/lister-premiums/lister-premiums.component';
import { ListercategorieComponent } from './termes-premiums/listercategorie/listercategorie.component';
import { GestionTarificationComponent } from './termes-premiums/gestion-tarification/gestion-tarification.component';
import { TermesReservesComponent } from './termes-reserves/termes-reserves.component';
import { AddReserveComponent } from './termes-reserves/add-reserve/add-reserve.component';
import { AddtagComponent } from './termes-reserves/addtag/addtag.component';
import { ListerReservesComponent } from './termes-reserves/lister-reserves/lister-reserves.component';
import { ListertagsComponent } from './termes-reserves/listertags/listertags.component';
import { GestionAutorisationComponent } from './termes-reserves/gestion-autorisation/gestion-autorisation.component';
import { ListerdemandesComponent } from './termes-reserves/gestion-autorisation/listerdemandes/listerdemandes.component';
import { DocumentationComponent } from './documentation/documentation.component';

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
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
