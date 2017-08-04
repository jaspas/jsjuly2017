import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Jumpstarter } from '../services/jumpstarter';

import { JumpstarterService } from '../services/jumpstarter.service';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
  providers: [JumpstarterService]
})
export class PlaygroundComponent implements OnInit {

  id: number;
  jumpstarters: Jumpstarter[];
  fireJumpstarter: FirebaseListObservable<Jumpstarter[]>;

  dogs: string[] = ["max", "moritz", "otto"];
  cat = { name: "lucy", race: "BKH", gender: "female", age: 20 };
  zahl: number = 23;
  jumpstarter: Jumpstarter = { id: 99, firstname: "", lastname: "", telephone: "", email: "", jumpstart: "", picture: "", homeoffice: "", country: "" };


  /*
  Constructor with dependency injected services
  */
  constructor(private jumpstarterService:JumpstarterService, private activatedRoute: ActivatedRoute,
    private db:AngularFireDatabase) {
  this.fireJumpstarter = db.list('/jumpstarter');

 }


  ngOnInit() {
    //Call of Service for Jumpstarters
    this.jumpstarters = this.jumpstarterService.getJumpstarters();


      this.fireJumpstarter.subscribe(jumpstarter =>{
      console.log(jumpstarter);
      console.log(jumpstarter[0]);
    });

    //Getting route params
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.id = +params['id'];
      if (this.id >= 0) {
        //this.jumpstarter = this.jumpstarterService.getJumpstarterById(this.id);
      }
    });
  }

  addJumpstarter() {
    console.log(this.jumpstarter);
    this.jumpstarters.push(this.jumpstarter);
  }

  test(){
    var keys = Object.keys(this.jumpstarters[0])

    for(var i = 0; i < keys.length; i++){
      console.log(this.jumpstarters[keys[i]]);
    }

    console.log(keys);
  }

}
