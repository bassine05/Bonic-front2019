import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient, private router: Router) {

  }

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  setTocken(tocken) {
    localStorage.setItem('tocken', JSON.stringify(tocken));
  }

  getTocken() {
    return JSON.parse(localStorage.getItem('tocken'));
  }
}
