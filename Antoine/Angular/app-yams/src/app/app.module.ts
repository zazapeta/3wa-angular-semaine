import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastriesDetailsComponent } from './pastries-details/pastries-details.component';
import { BorderCardDirective } from './border-card.directive';
import { PastryTagColorPipe } from './pastry-tag-color.pipe';

const pastriesRoutes: Routes = [
  { path: 'pastries', component: PastriesComponent, },
  { path: 'pastries/:pastrieId/read', component: PastriesComponent },
  {
    path: '',
    redirectTo: '/pastries',
    pathMatch: 'full'
  },
  { path: '**', component: PastriesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    PastriesDetailsComponent,
    BorderCardDirective,
    PastryTagColorPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(pastriesRoutes,
      {
        bindToComponentInputs: true
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
