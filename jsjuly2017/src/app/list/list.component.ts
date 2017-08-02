import { Component, OnInit } from '@angular/core';

import { JUMPSTARTER } from '../services/mock-jumpstarter';
import { Jumpstarter } from '../services/jumpstarter';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  jumpstarters: Jumpstarter[] =  JUMPSTARTER;
  jumpstarter: Jumpstarter;

  constructor() { }

  ngOnInit() {
  }

}
