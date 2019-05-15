import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateCodeComponent } from './generate-code/generate-code.component';
import { GestionAutorisationComponent } from './gestion-autorisation.component';
import { ListerdemandesComponent } from './listerdemandes/listerdemandes.component';

const routes: Routes = [
  {path: 'autorisation',component: GestionAutorisationComponent,
  children:[
    {path: 'code',component: GenerateCodeComponent},
    {path: 'listerdemande',component: ListerdemandesComponent}
  ],
}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAutorisationRoutingModule { }
