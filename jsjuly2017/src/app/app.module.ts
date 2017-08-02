import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
<<<<<<< HEAD
import { DetailpageComponent } from './detailpage/detailpage.component';
=======
import { AddComponent } from './add/add.component';
>>>>>>> 54425b359ca9662e45861ddb9525d0df5bf3656e

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
<<<<<<< HEAD
    DetailpageComponent
=======
    AddComponent
>>>>>>> 54425b359ca9662e45861ddb9525d0df5bf3656e
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
