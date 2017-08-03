import { Component, OnInit } from '@angular/core';

import { Jumpstarter } from '../services/jumpstarter';

import { JumpstarterService } from '../services/jumpstarter.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
  providers: [JumpstarterService]
})
export class PlaygroundComponent implements OnInit {

  jumpstarters: Jumpstarter[];

  dogs: string[] = ["max", "moritz", "otto"];
  cat = {name: "lucy", race: "BKH", gender: "female", age: 20};
  zahl: number = 23;
  jumpstarter: Jumpstarter = {id:99,firstname:"",lastname:"",telephone:"",email:"",jumpstart:"",picture:"",homeoffice:"",country:""};

  constructor(private jumpstarterService: JumpstarterService) { }

  ngOnInit() {
    this.jumpstarters = this.jumpstarterService.getJumpstarters();
  }

  addJumpstarter(){
    console.log(this.jumpstarter);
    this.jumpstarters.push(this.jumpstarter);
  }

}
