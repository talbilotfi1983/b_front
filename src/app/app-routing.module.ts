import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P404Component } from './modules/p404/p404.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GaragesPartenairesComponent } from './pages/garages-partenaires/garages-partenaires.component';
import { HomeComponent } from './pages/home/home.component';
import { MonEspaceComponent } from "./pages/mon-espace/mon-espace.component";
import { PneusComponent } from './pages/pneus/pneus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'garages-partenaires', component: GaragesPartenairesComponent },
  { path: 'pneus-auto-moto', component: PneusComponent },
  { path: 'monEspace', component: MonEspaceComponent },
  { path: 'equipements-auto-moto', component: MonEspaceComponent },
  { path: '**', component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
