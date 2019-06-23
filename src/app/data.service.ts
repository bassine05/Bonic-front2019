import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   //baseUrl = 'http://41.214.74.68:3001/api/';

   baseUrl = 'http://localhost:3000/';

  constructor(public http: HttpClient, private authService: AuthService) {

  }

  headers: any;

  get(url) {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + url)
          .subscribe(res => {
            console.log(res)
            resolve(res);
          }, (err) => {
            console.log(err)
            reject(err);
          });
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + url, data)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
  

  login(url, data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + url, data)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  patch(url, id, data) {
    return new Promise((resolve, reject) => {
      this.http.patch(this.baseUrl + url + '/' + id, data)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      this.http.put(this.baseUrl + url , data)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
}
