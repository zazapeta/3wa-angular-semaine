import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastrieDetailsComponent } from './pastrie-details/pastrie-details.component';
import { PipePastryTagColorPipe } from './pipe-pastry-tag-color.pipe';

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
    PastrieDetailsComponent,
    PipePastryTagColorPipe
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
