import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastriesDetailsComponent } from './pastries-details/pastries-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    PastriesDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
