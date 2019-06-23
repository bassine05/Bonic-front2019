import { Component, OnInit, Input } from '@angular/core';

import swal from 'sweetalert';
import { DataService } from 'src/app/data.service';
import { AddregistrarService } from './addregistrar.service';
import { Router } from '@angular/router';
import { Addregistrar} from './addregistrar';
import { GestionComptesRegistrarsComponent } from '../../gestion-comptes-registrars/gestion-comptes-registrars.component';
import { Observable } from 'rxjs';
import { City } from './city';
import { Country } from './country';

@Component({
  selector: 'app-addregistrar',
  templateUrl: './addregistrar.component.html',
  styleUrls: ['./addregistrar.component.css']
})
export class AddregistrarComponent implements OnInit {
  //@Input() registrar: Addregistrar;
  varurl="registrars.json";
  /*registrar = {
    name : 'basssjf',
    mail : 'bassine@hotmail.com',
    phone : '77243564',
    fax : 'kcddjfhfd',
    adresse : 'hjfhfjgflm',
    url : 'https://www.nic.sn',
    city_id : 1
  }
  */
 cities: City[];
 countries: Country[];
 addregistrar: Addregistrar[];
 name : string;
 mail : string;
 phone : string;
 fax : string;
 adresse : string;
 url : string;
 NINEA : string;
 GURID : string;
 IDEXTERNE : string;
 country : string;
 city_id : string;
  pasBon = false;
  constructor(private registrarService: AddregistrarService, private router: Router) { 
    
  }
  createRegistrar(){
    this.registrarService.createRegistrar(new Addregistrar(this.name,this.mail,this.phone,this.fax,this.adresse,this.url,this.NINEA,this.GURID,this.IDEXTERNE, this.country,this.city_id)).subscribe( (data:Observable<string>) =>
     this.router.navigate(['/accueil/dashboard']),
      res => alert('Enregistrement effectué'));
  }
 

  getCities(){
    this.registrarService.getCities().subscribe(
      cities => this.cities = cities
    );
  }
  getCountries(){
    this.registrarService.getCountries().subscribe(
      countries => this.countries = countries
    );
  }
  ngOnInit() {
    this.getCities()
    this.getCountries()
  }

  /*saveForm(){
    this.dataService.post(
     this.varurl,(this.name,this.mail,this.phone,this.adresse,this.url,this.city_id)
    ).then((data) => {
      console.log(data)
    },
    err => {
      console.log(err)
    })
  }
*/
}
