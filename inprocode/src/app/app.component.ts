// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component'; // Asegúrate de importar NavBarComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // Directiva para renderizar la ruta actual
    NavBarComponent, 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inprocode';
}
