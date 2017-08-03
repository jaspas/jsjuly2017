import { Injectable } from '@angular/core';
import { HOMEOFFICE } from './mock-homeoffice';
import { Homeoffice } from './homeoffice';

@Injectable()
export class HomeofficeService {

  homeoffice: Homeoffice[]=HOMEOFFICE;

  constructor() { }

  getHomeoffices() {
    return this.homeoffice;
  }

  addHomeoffice() {
    let h : Homeoffice = new Homeoffice;
    h.office = "Munich";
    this.homeoffice.push(h);
  }

  getHomeofficeById(id) {
    return this.homeoffice[id];
  }

}
