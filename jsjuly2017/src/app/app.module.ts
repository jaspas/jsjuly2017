import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { AddComponent } from './add/add.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'details',      component: DetailpageComponent },
  { path: 'details/:id',      component: DetailpageComponent },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'playground',
    component: PlaygroundComponent
  },
  {
    path: 'playground/:einhorn',
    component: PlaygroundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    AddComponent,
    DetailpageComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
