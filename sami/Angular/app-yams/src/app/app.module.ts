import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';

import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PastrieDetailsComponent } from './pastrie-details/pastrie-details.component';
import { PastryTagColorPipe } from './pastry-tag-color.pipe';
/**
 *     
 * "/" -> Index, HomePage
CRUD Front: 

    "/pastries/read" -> Page qui affiche la Liste des patries
    "/pastries/create" -> Page qui affiche le formulaire de création d'une pastries
    "/pastries/:pastriId/read" --> (ex: /pastries/3) Affiche les details de la pastrie dont l'id est ":pastrieId"
    "/pastries/:pastrieId/update" --> Affiche le formulaire de mise à jour de la pastrie dont l'id est donnée dans l'url (":pastrieId")
    "/pastries/:pastriesId/delete" --> Affiche la formulaire de supression de la pastrie dont l'id est donnée dans l'url


 */
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
    ToolbarComponent,
    PastrieDetailsComponent,
    PastryTagColorPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, bindToComponentInputs: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
