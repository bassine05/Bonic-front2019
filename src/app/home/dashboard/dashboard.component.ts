import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  mydata = 0;

  accueils = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAccueils();
  }

  getAccueils(){
    this.dataService.get('AccueilAs')
      .then(
        (data:any) => {
          this.accueils = data;
          this.mydata = data.length;
          console.log(data);
        },
        err => {
          console.log(err)
        }
      )
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
