import { Injectable } from '@angular/core';
import { Jumpstarter } from './jumpstarter';
import { COUNTRIES } from './mock-countries';
import {Country} from './country';

@Injectable()
export class CountryService {

  countries:Country[] = COUNTRIES;

  constructor() { }

  getCountries(){
    return this.countries;
  }

  addCountry(country:Country){
    this.countries.push(country);
  }
}
