import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaLayoutComponent } from './layout/mapa-layout/mapa-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { ZoomRangePageComponent } from './pages/zoomRangePage/zoomRangePage.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';

const routes: Routes = [
{
  path: '',
  component: MapaLayoutComponent,
  children: [
    { path: 'fullscreen', component: FullScreenPageComponent},
    { path: 'zoom-range', component: ZoomRangePageComponent},
    { path: 'markers', component: MarkersPageComponent},
    { path: 'properties', component: PropertiesPageComponent},
    { path: '**', redirectTo: 'fullscreen' },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapaRoutingModule {}
