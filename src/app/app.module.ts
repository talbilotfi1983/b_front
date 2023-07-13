import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './modules/authentification/connection/connection.component';
import { InscriptionComponent } from './modules/authentification/inscription/inscription.component';
import { FooterComponent } from './modules/footer/footer.component';
import { PopupGaragesComponent } from './modules/modals/popup-garages/popup-garages.component';
import {
  PopupInscriptionGaragesComponent
} from './modules/modals/popup-inscription-garages/popup-inscription-garages.component';
import { NavComponent } from './modules/nav/nav.component';
import { P404Component } from './modules/p404/p404.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EquipementAutoMotoComponent } from "./pages/equipement-auto-moto/equipement-auto-moto.component";
import { GaragesPartenairesComponent } from './pages/garages-partenaires/garages-partenaires.component';
import { EquipementsComponent } from './pages/home/equipements/equipements.component';
import { HomeComponent } from './pages/home/home.component';
import { JantesComponent } from './pages/home/jantes/jantes.component';
import { PiecesComponent } from './pages/home/pieces/pieces.component';
import { PneusComponent } from './pages/home/pneus/pneus.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { MonEspaceComponent } from './pages/mon-espace/mon-espace.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    SliderComponent,
    HomeComponent,
    ContactComponent,
    PiecesComponent,
    EquipementsComponent,
    PneusComponent,
    JantesComponent,
    P404Component,
    GaragesPartenairesComponent,
    PneusComponent,
    PopupInscriptionGaragesComponent,
    PopupGaragesComponent,
    ConnectionComponent,
    InscriptionComponent,
    MonEspaceComponent,
    EquipementAutoMotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
