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
    jumpstarter.id = this.getNewId();
    this.jumpstarters.push(jumpstarter);
    console.log(this.jumpstarters.length);    
  }

  getJumpstarterById(id){
      return this.jumpstarters[id];
  }

  getNewId()  {
  return <number>
  (this.jumpstarters[this.jumpstarters.length-1].id +1);
  }

}
