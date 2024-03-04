import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { LocationService } from '../services/location.service';
import { Location as MapLocation } from '../models/location.model';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  private map!: L.Map;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.initMap();
    this.loadLocations();
    this.handleRightClickToAddMarkers();
  }

  private initMap(): void {
    this.map = L.map('map').setView([41.3851, 2.1734], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private loadLocations(): void {
    this.locationService.getLocations().subscribe(locations => {
      locations.forEach(location => {
        if (location.id !== undefined) {
          this.addLocationMarker(location);
        }
      });
    });
  }

  private addLocationMarker(location: MapLocation): void {
    const marker = L.marker([location.latitude, location.longitude])
      .addTo(this.map);
  
    // Define el contenido del popup sin usar 'onclick'
    marker.bindPopup(`<b>${location.name}</b><br>` +
      `<button id="edit-${location.id}">Editar</button>` +
      `<button id="delete-${location.id}">Borrar</button>`);

      marker.on('popupopen', () => {
        const editButton = document.getElementById(`edit-${location.id}`);
        const deleteButton = document.getElementById(`delete-${location.id}`);
      
        if (editButton && location.id !== undefined) {
          editButton.addEventListener('click', () => {
            // Aserción de tipo para asegurar que id es de tipo number.
            this.editLocation(location.id as number, marker, location.name);
          });
        }
        if (deleteButton && location.id !== undefined) {
          deleteButton.addEventListener('click', () => {
            // Aserción de tipo para asegurar que id es de tipo number.
            this.deleteLocation(location.id as number, marker);
          });
        }
      });
          }
  

  editLocation(id: number, marker: L.Marker, currentName: string): void {
    const newName = prompt("Ingrese el nuevo nombre de la ubicación:", currentName);
    if (newName && typeof id === 'number') {
      this.locationService.updateLocation({
        id, name: newName,
        latitude: marker.getLatLng().lat,
        longitude: marker.getLatLng().lng
      }).subscribe(updatedLocation => {
        marker.setPopupContent(`<b>${updatedLocation.name}</b>`);
      });
    }
  }
  
  deleteLocation(id: number, marker: L.Marker): void {
    const isConfirmed = confirm("¿Está seguro de que quiere borrar esta ubicación?");
    if (isConfirmed && typeof id === 'number') {
      this.locationService.deleteLocation(id).subscribe(() => {
        this.map.removeLayer(marker);
      });
    }
  }
    
  private handleRightClickToAddMarkers(): void {
    this.map.on('contextmenu', (event) => {
      const name = prompt("Ingrese el nombre de la nueva ubicación:");
      if (name) {
        const { lat, lng } = event.latlng;
        this.locationService.addLocation({ name, latitude: lat, longitude: lng }).subscribe({
          next: (response: MapLocation) => {
            this.addLocationMarker(response); // Usa addLocationMarker para asegurarte de que el marcador tenga la lógica de editar y borrar correctamente configurada
          },
          error: (error: any) => console.error('Error al guardar la ubicación:', error)
        });
      }
    });
  }
  }
