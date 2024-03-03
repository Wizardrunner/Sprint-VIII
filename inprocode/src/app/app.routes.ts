// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapaComponent } from './mapa/mapa.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { GraficasComponent } from './graficas/graficas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'mapa', component: MapaComponent, title: 'Map' },
  { path: 'fullCalendar', component: FullCalendarComponent, title: 'FullCalendar' },
  { path: 'graficas', component: GraficasComponent, title: 'Charts' },
];
