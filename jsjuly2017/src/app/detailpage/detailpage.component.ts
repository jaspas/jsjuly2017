import { Component, OnInit } from '@angular/core';
import { Jumpstarter } from '../services/jumpstarter';
import{ JUMPSTARTER } from '../services/mock-jumpstarter';
import{ JumpstarterService } from '../services/jumpstarter.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MailtoPipe } from '../mailto.pipe';
import { AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css'],
  providers: [JumpstarterService, MailtoPipe]
})
export class DetailpageComponent implements OnInit {

  id: number;
  jumpstarter:FirebaseObjectObservable<Jumpstarter>;

  constructor(
    private jumpstarterService:JumpstarterService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private mailto: MailtoPipe,
    private db:AngularFireDatabase) {

    }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
      this.jumpstarter = this.db.object('/jumpstarter/'+this.id);

//private jumpie:Jumpstarter;
      this.jumpstarter.subscribe(jumpie => {
        console.log(jumpie);
      })
    });

      // if (+params['id'] >= 0) {
      //   this.jumpstarter = this.jumpstarterService.getJumpstarterById(+params['id']);
      // }else{
      //   this.jumpstarter = this.jumpstarterService.getJumpstarterById(0);
      // }
  }

  navigateToList(){
    this.router.navigate(['/list']);
  }


}
