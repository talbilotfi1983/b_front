import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {C1Component} from "./c1/c1.component";
import {C2Component} from "./c2/c2.component";
import {P404Component} from "./p404/p404.component";

const routes: Routes = [
  {path: 'c1', component: C1Component},
  {path: 'c2', component: C2Component},
  {path: '', redirectTo: '/c1', pathMatch: 'full'},
  {path: '**', component: P404Component},  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
