import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Jumpstarter } from '../services/jumpstarter';

import { JumpstarterService } from '../services/jumpstarter.service';

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

  dogs: string[] = ["max", "moritz", "otto"];
  cat = { name: "lucy", race: "BKH", gender: "female", age: 20 };
  zahl: number = 23;
  jumpstarter: Jumpstarter = { id: 99, firstname: "", lastname: "", telephone: "", email: "", jumpstart: "", picture: "", homeoffice: "", country: "" };



  constructor(private jumpstarterService: JumpstarterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.jumpstarters = this.jumpstarterService.getJumpstarters();

    this.activatedRoute.params.subscribe(params => {
      this.id = +params['einhorn'];
      if (this.id >= 0) {
        this.jumpstarter = this.jumpstarterService.getJumpstarterById(this.id);
      }
    });
  }

  addJumpstarter() {
    console.log(this.jumpstarter);
    this.jumpstarters.push(this.jumpstarter);
  }

}
