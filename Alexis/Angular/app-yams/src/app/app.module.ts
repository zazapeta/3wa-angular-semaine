import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PatrieDetailsComponent } from './patrie-details/patrie-details.component';
import { PastryTagColorPipe } from './pastry-tag-color.pipe';


const appRoutes: Routes = [
  { path: 'pastries', component: PastriesComponent },
  { path: 'pastries/read', component: PastriesComponent },
  { path: 'pastries/create', component: PastriesComponent },
  { path: 'pastries/:pastrieId/read', component: PastriesComponent},
  { path: 'pastries/:pastrieId/update', component: PastriesComponent },
  { path: 'pastries/:pastrieId/delete', component: PastriesComponent },
  { path: '', redirectTo: "/pastries", pathMatch: 'full' },
  { path: '**', component: PastriesComponent }, // 404 not found
];

@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    PatrieDetailsComponent,
    PastryTagColorPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, bindToComponentInputs: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
