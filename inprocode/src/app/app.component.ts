// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Verifica que la ruta de importación sea correcta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // Directiva para renderizar la ruta actual
    HomeComponent, // Importa HomeComponent aquí
  ],
  template: `
    <app-home></app-home> 
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inprocode';
}
