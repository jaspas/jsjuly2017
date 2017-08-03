import { Injectable } from '@angular/core';
import { Jumpstarter } from './jumpstarter';
import { JUMPSTARTER } from './mock-jumpstarter';


@Injectable()
export class JumpstarterService{

  jumpstarters:Jumpstarter[] = JUMPSTARTER;

  constructor() { }

  getJumpstarters(){
    return this.jumpstarters;
  }

  addJumpstarter(jumpstarter:Jumpstarter){

  }

  getJumpstarterById(id){
      return this.jumpstarters[id];
  }
}
