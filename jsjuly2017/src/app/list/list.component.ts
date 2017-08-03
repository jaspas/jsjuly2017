import { Component, OnInit } from '@angular/core';

import { Jumpstarter } from '../services/jumpstarter';

import { Homeoffice } from '../services/homeoffice';
import { JumpstarterService } from '../services/jumpstarter.service';
import { HomeofficeService } from '../services/homeoffice.service';

import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [JumpstarterService, HomeofficeService]
})
export class ListComponent implements OnInit {

  jumpstarters: Jumpstarter[];

  offices: Homeoffice[];

  jumpstarter: Jumpstarter;

  constructor(private jumpstarterService: JumpstarterService,
    private homeofficeService: HomeofficeService,
    private router: Router) { }

  onSelect(jumpstarter: Jumpstarter) {
    this.router.navigate(['/details', jumpstarter.id]);
  }

  addJumpstarter(){
    this.router.navigate(['/add']);
  }

  ngOnInit() {
    this.jumpstarters = this.jumpstarterService.getJumpstarters();
    this.offices = this.homeofficeService.getHomeoffices();

  }
}
