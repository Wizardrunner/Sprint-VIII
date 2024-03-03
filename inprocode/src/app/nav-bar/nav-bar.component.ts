// En nav-bar.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule], // Añade RouterModule aquí
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  // Tu lógica de componente aquí...
}
