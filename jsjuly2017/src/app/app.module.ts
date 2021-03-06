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

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
    MailtoPipe,
    PhoneformatPipe,
    CallPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({databaseURL: 'https://jsjuly2017.firebaseio.com'}),
    AngularFireDatabaseModule,
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
