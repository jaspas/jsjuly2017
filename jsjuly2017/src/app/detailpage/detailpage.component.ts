import { Component, OnInit } from '@angular/core';
import { Jumpstarter } from '../services/jumpstarter';
import{ JUMPSTARTER } from '../services/mock-jumpstarter';
import{ JumpstarterService } from '../services/jumpstarter.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css'],
  providers: [JumpstarterService]
})
export class DetailpageComponent implements OnInit {

  constructor(private jumpstarterService:JumpstarterService) { }

  jumpstarter:Jumpstarter;

  ngOnInit() {
    this.jumpstarter = this.jumpstarterService.getJumpstarterById(0);
  }


}
