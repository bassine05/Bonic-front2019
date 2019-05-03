import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { HomeModule } from './home/home.module';
import { RegistrarComponent } from './home/registrar/registrar.component';
import { DomainComponent } from './home/domain/domain.component';
import { DocumentationComponent } from './home/documentation/documentation.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    RegistrarComponent,
    DomainComponent,
    DocumentationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
