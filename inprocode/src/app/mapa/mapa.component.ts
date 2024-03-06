// src/app/mapa.component.ts
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
  styleUrls: ['./mapa.component.scss'],
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
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);
  }

  private loadLocations(): void {
    this.locationService.getLocations().subscribe((locations) => {
      locations.forEach((location) => {
        this.addLocationMarker(location);
      });
    });
  }

  private addLocationMarker(location: MapLocation): void {
    const marker = L.marker([location.latitude, location.longitude]).addTo(this.map);
    marker.bindPopup(this.getPopupContent(location, marker));

    marker.on('popupopen', () => {
      this.attachPopupEventListeners(location, marker);
    });
  }

  private getPopupContent(location: MapLocation, marker: L.Marker): string {
    // Estilos en línea para los botones, ajustados a colores similares a los de Bootstrap
    const editButtonStyle = "background-color: #28a745; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; margin-right: 5px;";
    const deleteButtonStyle = "background-color: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;";
    
    return `<b>${location.name}</b><br>` +
           `<button id="edit-${location.id}" style="${editButtonStyle}">Edit</button>` +
           `<button id="delete-${location.id}" style="${deleteButtonStyle}">Delete</button>`;
}

  private attachPopupEventListeners(location: MapLocation, marker: L.Marker): void {
    const editButton = document.getElementById(`edit-${location.id}`);
    const deleteButton = document.getElementById(`delete-${location.id}`);
    

    if (editButton && location.id !== undefined) {
      editButton.onclick = () => this.editLocation(location.id as number, marker, location.name);
    }

    if (deleteButton && location.id !== undefined) {
      deleteButton.onclick = () => this.deleteLocation(location.id as number, marker);
    }
  }

  editLocation(id: number, marker: L.Marker, currentName: string): void {
    const newName = prompt("Enter the new location name:", currentName);
    if (newName) {
      this.locationService.updateLocation({
        id, name: newName, latitude: marker.getLatLng().lat, longitude: marker.getLatLng().lng,
      }).subscribe((updatedLocation) => {
        marker.bindPopup(this.getPopupContent(updatedLocation, marker)).openPopup();
      });
    }
  }

  deleteLocation(id: number, marker: L.Marker): void {
    const isConfirmed = confirm("Are you sure you want to delete this location?");
    if (isConfirmed) {
      this.locationService.deleteLocation(id).subscribe(() => {
        this.map.removeLayer(marker);
      });
    }
  }

  private handleRightClickToAddMarkers(): void {
    this.map.on('contextmenu', (event) => {
      const name = prompt("Enter the name of the new location:");
      if (name) {
        const latlng = event.latlng;
        this.locationService.addLocation({
          name, latitude: latlng.lat, longitude: latlng.lng,
        }).subscribe((newLocation) => {
          this.addLocationMarker(newLocation);
        });
      }
    });
  }
}
