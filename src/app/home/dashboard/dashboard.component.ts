import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

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

}
