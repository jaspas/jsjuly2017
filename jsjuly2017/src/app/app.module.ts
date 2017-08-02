import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { DetailpageComponent } from './detailpage/detailpage.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    DetailpageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
