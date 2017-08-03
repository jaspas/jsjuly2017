import { Component, OnInit } from '@angular/core';
import { Jumpstarter } from '../services/jumpstarter';
import{ JUMPSTARTER } from '../services/mock-jumpstarter';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  jumpstarter:Jumpstarter = JUMPSTARTER[0];

}
