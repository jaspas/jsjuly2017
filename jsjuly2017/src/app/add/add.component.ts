import { Component, OnInit } from '@angular/core';
import { Jumpstarter } from '../services/jumpstarter';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  jumpstarter: Jumpstarter = {firstname:"",lastname:"",telephone:"",email:"",jumpstart:"",picture:"",homeoffice:"",country:""};
  jumpstarters: Jumpstarter[] = [];
  homeoffice: string;
  land: string = 'DE';

  starts : string[] =["Java","ABAP","FICO"];
  homeoffices: string[] = ["Munich", "Dusseldorf", "Frankfurt", "Zurich", "Berlin", "Nuremberg", "Hamburg"];

  addJumpstarter(){
    console.log(this.jumpstarter);
    this.jumpstarter.country = this.land;
    this.jumpstarters.push(this.jumpstarter);
    console.log(this.jumpstarters.length);
  }

  dropdownClicked(start: string){
console.log(start);
  }

  changeCountry(country){
    this.land = country;
  }

  constructor() { }

  ngOnInit() {
  }

}
