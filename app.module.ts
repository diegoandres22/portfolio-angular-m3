import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { NavLateralComponent } from './nav-lateral/nav-lateral.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { HardSkillsComponent } from './hard-skills/hard-skills.component';
import { AcercaDEComponent } from './acerca-de/acerca-de.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ModulsComponent } from './navbar/moduls/moduls.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BotomLogautComponent } from './dashboard/narbar/botom-logaut/botom-logaut.component';
import { BotonLoginComponent } from './navbar/boton-login/boton-login.component';
import { ErrorComponent } from './error/error.component';
import { NarbarComponent } from './dashboard/narbar/narbar.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    NavLateralComponent,
    ExperienciasComponent,
    EstudiosComponent,
    SoftSkillsComponent,
    HardSkillsComponent,
    AcercaDEComponent,
    ProyectosComponent,
    ModulsComponent,
    DashboardComponent,
    BotomLogautComponent,
    BotonLoginComponent,
    ErrorComponent,
    NarbarComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
