import { Component, OnInit } from '@angular/core';

import { Jumpstarter } from '../services/jumpstarter';

import { Homeoffice } from '../services/homeoffice';
import { JumpstarterService } from '../services/jumpstarter.service';
import { HomeofficeService } from '../services/homeoffice.service';

import { RouterModule, Router } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [JumpstarterService, HomeofficeService]
})
export class ListComponent implements OnInit {

  jumpstarters: Jumpstarter[];
  fireJumpstarter: FirebaseListObservable<Jumpstarter[]>;
  offices: Homeoffice[];

  search: string = "";

  constructor(private jumpstarterService: JumpstarterService,
    private homeofficeService: HomeofficeService,
    private router: Router, private db: AngularFireDatabase) {
    this.fireJumpstarter = db.list('/jumpstarter');
  }

  onSelect(jumpstarter: Jumpstarter) {
    this.router.navigate(['/details', jumpstarter.id]);
  }

  addJumpstarter() {
    this.router.navigate(['/add']);
  }

  filter() {
    this.jumpstarters = this.jumpstarterService.getJumpstarters();

    if (this.search != "") {
      this.search = this.search.toLowerCase();

      this.jumpstarters = this.jumpstarters.filter(js => {
        if (js.firstname.toLowerCase().includes(this.search) ||
          js.lastname.toLowerCase().includes(this.search) ||
          js.jumpstart.toLowerCase().includes(this.search)) {
          return true;
        }
      });
    }
  }

  ngOnInit() {

    this.jumpstarters = this.jumpstarterService.getJumpstarters();


    this.fireJumpstarter.subscribe(jumpstarter => {
      console.log(jumpstarter);
    });

    this.jumpstarters = this.jumpstarterService.getJumpstarters();
    this.offices = this.homeofficeService.getHomeoffices();

  }
}
