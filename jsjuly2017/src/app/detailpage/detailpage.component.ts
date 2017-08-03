import { Component, OnInit } from '@angular/core';
import { Jumpstarter } from '../services/jumpstarter';
import{ JUMPSTARTER } from '../services/mock-jumpstarter';
import{ JumpstarterService } from '../services/jumpstarter.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css'],
  providers: [JumpstarterService]
})
export class DetailpageComponent implements OnInit {

  constructor(
    private jumpstarterService:JumpstarterService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  jumpstarter:Jumpstarter;

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      if (+params['id'] >= 0) {
        this.jumpstarter = this.jumpstarterService.getJumpstarterById(+params['id']);
      }else{
        this.jumpstarter = this.jumpstarterService.getJumpstarterById(0);
      }
    });
  }

  navigateToList(){
    this.router.navigate(['/list']);
  }


}
