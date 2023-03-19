import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {P404Component} from './modules/p404/p404.component';
import {ContactComponent} from './pages/contact/contact.component';
import {GaragesPartenairesComponent} from './pages/garages-partenaires/garages-partenaires.component';
import {HomeComponent} from './pages/home/home.component';
import {PneusComponent} from './pages/pneus/pneus.component';
import {MonEspaceComponent} from "./pages/mon-espace/mon-espace.component";

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'garagesPartenaires', component: GaragesPartenairesComponent},
  {path: 'pneus', component: PneusComponent},
  {path: 'monEspace', component: MonEspaceComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: P404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
