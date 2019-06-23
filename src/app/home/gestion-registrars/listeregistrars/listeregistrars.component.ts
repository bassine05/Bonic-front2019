import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-listeregistrars',
  templateUrl: './listeregistrars.component.html',
  styleUrls: ['./listeregistrars.component.css']
})
export class ListeregistrarsComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.getRegistrars();
  }

  getRegistrars(){
    this.dataService.get('registrars.json')
      .then(
        (data:any) => {
          console.log(data);
        },
        err => {
          console.log(err)
        }
      )
  }

}
