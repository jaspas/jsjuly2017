import { Component, OnInit } from '@angular/core';

import { JUMPSTARTER } from '../services/mock-jumpstarter';
import { Jumpstarter } from '../services/jumpstarter';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  jumpstarters: Jumpstarter[] =  JUMPSTARTER;
<<<<<<< HEAD
  dogs: string[] = ["max", "moritz", "otto"];
  cat = {name: "lucy", race: "BKH", gender: "female", age: 20};
  zahl: number = 23;
  jumpstarter: Jumpstarter = {firstname:"",lastname:"",telephone:"",email:"",jumpstart:"",picture:"",homeoffice:"",country:""};

=======
  jumpstarter: Jumpstarter;
  homeoffice: string;
>>>>>>> 2bf2724c884ba7ba2264367b0a24298f14edc27a

  constructor() { }

  ngOnInit() {
  }

  addJumpstarter(){
    console.log(this.jumpstarter);
    this.jumpstarters.push(this.jumpstarter);
  }

}
