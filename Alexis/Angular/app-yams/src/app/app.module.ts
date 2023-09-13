import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PatrieDetailsComponent } from './patrie-details/patrie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    PatrieDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
