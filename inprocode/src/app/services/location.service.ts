// src/app/services/location.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location as MapLocation } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'http://localhost:3000/locations'; // URL de mi API

  constructor(private http: HttpClient) { }

  getLocations(): Observable<MapLocation[]> {
    return this.http.get<MapLocation[]>(this.apiUrl);
  }

  // Método para añadir una nueva ubicación
  addLocation(location: Omit<MapLocation, 'id'>): Observable<MapLocation> { // Usamos Omit para excluir el id
    return this.http.post<MapLocation>(this.apiUrl, location);
  }

  // Método para actualizar una ubicación
  updateLocation(location: MapLocation): Observable<MapLocation> {
    return this.http.patch<MapLocation>(`${this.apiUrl}/${location.id}`, location);
  }

  // Método para borrar una ubicación
  deleteLocation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}