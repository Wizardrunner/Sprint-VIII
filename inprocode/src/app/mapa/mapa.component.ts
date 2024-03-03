// src/app/mapa.component.ts
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { LocationService } from '../services/location.service'; // Asegúrate de que la ruta sea correcta
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [NavBarComponent], // Solo componentes aquí
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  constructor(private locationService: LocationService) {} // Inyecta el servicio aquí

  ngOnInit() {
    const map = L.map('map').setView([41.3851, 2.1734], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Obtener ubicaciones y añadir marcadores
    this.locationService.getLocations().subscribe(locations => {
      locations.forEach(location => {
        L.marker([location.latitude, location.longitude]).addTo(map)
          .bindPopup(location.name);
      });
    });
  }
}
