import { Component, OnInit } from '@angular/core';
import { Jumpstarter } from '../services/jumpstarter';
import { Country} from'../services/country';
import { Homeoffice} from '../services/homeoffice';
import { JumpstarterService } from '../services/jumpstarter.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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

  countries: FirebaseListObservable<Country[]>;
  starts : string[] =["Big Data", "Business Analysis & Testing","H&PS","Infrastructure", "Interactice", "IT Change Management", "Java","PCS","Pega", "PLM", "Sales Forces", "SAP Analytics", "SAP ABAP", "SAP CRM", "SAP FICO", "SAP Fundamentals", "SAP SCM","Talent & HR", "Visualitation"];
  homeoffices: FirebaseListObservable<Homeoffice[]>;

  id: number = -1;
  jumpstarters: Jumpstarter[];

  addJumpstarter(){
    this.jumpstarter.country = this.land;
    //this.jumpstarter.email = this.mailtoPipe.transform(this.jumpstarter.email);
    this.id = this.jumpstarterService.addJumpstarter(this.jumpstarter);
    this.jumpstarter = new Jumpstarter;
    this.router.navigate(["/list/"]);
  }

  dropdownClicked(start: string){
    console.log(start);
  }

  changeCountry(country){
    this.land = country;
  }

  constructor(private db: AngularFireDatabase, private jumpstarterService: JumpstarterService, private activatedRoute: ActivatedRoute,
  private router:Router) {
    this.countries = db.list('/countries');
    this.homeoffices = db.list('/homeoffice');
  }

  ngOnInit() {
    this.jumpstarters = this.jumpstarterService.getJumpstarters();

    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id >= 0) {
        this.jumpstarter = this.jumpstarterService.getJumpstarterById(this.id);
      }
    });
  }

  addJumpstarterRedirect(){
      this.jumpstarter.country = this.land;
      //this.jumpstarter.email = this.mailtoPipe.transform(this.jumpstarter.email);
      this.id =  this.jumpstarterService.addJumpstarter(this.jumpstarter);
      this.jumpstarter = new Jumpstarter;
      //newJumpstarter = this.jumpstarterService.getJumpstarters[this.jumpstarterService.getJumpstarters().length-1];
      this.router.navigate(["/details/", this.id]);
  }
}
