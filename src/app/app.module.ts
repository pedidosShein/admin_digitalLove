import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { NotificacioesComponent } from './notificaciones/notificaciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PerfilComponent } from './perfil/perfil.component';
import {HttpClientModule}  from "@angular/common/http";
import { MapComponent } from './map/map.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavComponent,
    NotificacioesComponent,
    UsuariosComponent,
    PerfilComponent,
    MapComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
