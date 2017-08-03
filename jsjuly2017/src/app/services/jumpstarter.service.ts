import { Injectable } from '@angular/core';
import { Jumpstarter } from './jumpstarter';
import { JUMPSTARTER } from './mock-jumpstarter';


@Injectable()
export class JumpstarterService{

  jumpstarter:Jumpstarter[] = JUMPSTARTER;

  constructor() { }

  getJumpstarters(){
    return this.jumpstarter;
  }

  addJumpstarter(jumpstarter:Jumpstarter){

  }

  getJumpstarterById(id){

  }
}
