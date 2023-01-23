import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';
import { NavComponent } from './modules/nav/nav.component';
import { PopupInscriptionGaragesComponent } from './modules/nav/popup-inscription-garages/popup-inscription-garages.component';
import { P404Component } from './p404/p404.component';

@NgModule({
  declarations: [
    AppComponent,
    P404Component,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PopupInscriptionGaragesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
