import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
<<<<<<< HEAD
import { DetailpageComponent } from './detailpage/detailpage.component';
=======
import { AddComponent } from './add/add.component';
>>>>>>> c7c5b7e978e75be795b0ea4079e1eefefd9dacba

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
<<<<<<< HEAD
    DetailpageComponent
=======
    AddComponent
>>>>>>> c7c5b7e978e75be795b0ea4079e1eefefd9dacba
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
