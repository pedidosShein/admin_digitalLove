import { Component } from '@angular/core';

interface MenuItem {
  name : string;
  route: string;
}


@Component({
  selector: 'mapa-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/mapa/fullscreen', name: 'FullScreen' },
    { route: '/mapa/zoom-range', name: 'ZoomRange' },
    { route: '/mapa/markers', name: 'Markers' },
    { route: '/mapa/properties', name: 'Houses' },
  ];

}
