import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapaRoutingModule } from './mapa-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapaLayoutComponent } from './layout/mapa-layout/mapa-layout.component';

@NgModule({
  declarations: [
    MiniMapaComponent,
    SideMenuComponent,
    MapaLayoutComponent
  ],
  imports: [
    CommonModule,
    MapaRoutingModule
  ]
})
export class MapaModule { }
