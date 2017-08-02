import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PlaygroundComponent } from './playground/playground.component';
import { AddComponent } from './add/add.component';
import {DetailpageComponent} from './detailpage/detailpage.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    AddComponent
    DetailpageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
