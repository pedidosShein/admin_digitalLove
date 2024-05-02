
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'mapa',
  loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaModule ),},
  {path: 'panel', component: MainComponent},
  {path: 'nav', component: NavComponent},
];

export const appRoutingProviders: any[]=[];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
