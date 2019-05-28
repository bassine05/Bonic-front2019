import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }

  ngAfterViewInit() {
    //this.makeMyScriptExecuted();
  }

  makeMyScriptExecuted() {
    const element = document.createElement('script');
    element.src = 'assets/js/custom.js';
    document.body.appendChild(element);
  }

  goDashboard() {
    document.getElementById('go').click();
  }

}
