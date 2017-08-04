import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { AddComponent } from './add/add.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ListComponent } from './list/list.component';
import { CoolnessPipe } from './services/coolness.pipe';
import { CallPipe } from './services/call.pipe';
import { PhoneformatPipe } from './services/phoneformat.pipe';
import { MailtoPipe } from './mailto.pipe';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent
  },
  { path: 'details',      component: DetailpageComponent },
  { path: 'details/:id',      component: DetailpageComponent },
  {path: 'add',
    component: AddComponent
  },
  {
    path: 'playground',
    component: PlaygroundComponent
  },
  {
    path: 'playground/:id',
    component: PlaygroundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    AddComponent,
    DetailpageComponent,
    ListComponent,
    CoolnessPipe,
<<<<<<< HEAD
    MailtoPipe
=======
    PhoneformatPipe,
    CallPipe
>>>>>>> b0275e7dec2806e60d506300932fd57e6a773bbf
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







/*
,
AngularFireModule.initializeApp({databaseURL: 'https://jsjuly2017.firebaseio.com'}),
AngularFireDatabaseModule,
*/
