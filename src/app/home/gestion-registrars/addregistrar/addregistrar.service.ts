import { Injectable } from '@angular/core';
import { Addregistrar } from './addregistrar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './city';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class AddregistrarService {

  constructor(private http: HttpClient, private registrar: AddregistrarService) { }
  createRegistrar(registrar: Addregistrar){
    const url= 'http://localhost:3000/registrars.json';
  return this.http.post(url,{registrar});
  }
  getCities(): Observable<City[]>{
    const url= 'http://localhost:3000/cities.json';
    return this.http.get<City[]>(url);
  }
  getCountries(): Observable<Country[]>{
    const url= 'http://localhost:3000/countries.json';
    return this.http.get<Country[]>(url);
  }
}

