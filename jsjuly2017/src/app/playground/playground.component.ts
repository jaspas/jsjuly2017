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
  jumpstarter: Jumpstarter;

  constructor() { }

  ngOnInit() {
  }

  addJumpstarter(){
    console.log(this.jumpstarter);
    this.jumpstarters.push(this.jumpstarter);
  }

}
