import { Component, OnInit } from '@angular/core';
import { Jumpstarter } from '../services/jumpstarter';
import { JumpstarterService } from '../services/jumpstarter.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [JumpstarterService]
})
export class AddComponent implements OnInit {

  initjumpstarter: Jumpstarter = {id:-1,firstname:"",lastname:"",telephone:"",email:"",jumpstart:"",picture:"",homeoffice:"",country:""};
  jumpstarter: Jumpstarter = this.initjumpstarter;
//jumpstarters: Jumpstarter[] = this.jumpstarterService.getJumpstarters();
  homeoffice: string;
  land: string = 'DE';

  countries : string[] = ["DE", "AT", "CH", "RU"];
  starts : string[] =["Big Data", "Business Analysis & Testing","H&PS","Infrastructure", "Interactice", "IT Change Management", "Java","PCS","Pega", "PLM", "Sales Forces", "SAP Analytics", "SAP ABAP", "SAP CRM", "SAP FICO", "SAP Fundamentals", "SAP SCM","Talent & HR", "Visualitation"];
  homeoffices: string[] = ["Kronberg", "Munich", "Dusseldorf", "Frankfurt", "Zurich", "Berlin", "Nuremberg", "Hamburg", "WienVienna", "Zurich"];

  addJumpstarter(){
    this.jumpstarter.country = this.land;
    this.jumpstarterService.addJumpstarter(this.jumpstarter);
    this.jumpstarter = new Jumpstarter;
  }

  dropdownClicked(start: string){
    console.log(start);
  }

  changeCountry(country){
    this.land = country;
  }

  constructor(private jumpstarterService: JumpstarterService) { }

  ngOnInit() {
  }

}
