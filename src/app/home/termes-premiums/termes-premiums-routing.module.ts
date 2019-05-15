import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermesPremiumsComponent } from './termes-premiums.component';
import { AddPremiumComponent } from './add-premium/add-premium.component';
import { AddcategorieComponent } from './addcategorie/addcategorie.component';
import { ListercategorieComponent } from './listercategorie/listercategorie.component';
import { ListerPremiumsComponent } from './lister-premiums/lister-premiums.component';
import { GestionTarificationComponent } from './gestion-tarification/gestion-tarification.component';

const routes: Routes = [
  {path: 'premium',component: TermesPremiumsComponent,
  children:[
    {path: 'addpremium',component: AddPremiumComponent},
    {path: 'addcategorie',component: AddcategorieComponent},
    {path: 'listerpremiums',component: ListerPremiumsComponent},
    {path: 'listercategories',component: ListercategorieComponent},
    {path: 'tarification',component: GestionTarificationComponent}
  ],
}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermesPremiumsRoutingModule { }
