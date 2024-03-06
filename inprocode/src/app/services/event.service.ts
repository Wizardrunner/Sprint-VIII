// src/app/event.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:3000/events'; 

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }


  addEvent(eventData: any): Observable<any> {
    console.log('Enviando evento al backend:', eventData);
    return this.http.post(this.baseUrl, eventData);
  }
    
  updateEvent(id: number, eventData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, eventData);
  }
  
  deleteEvent(eventId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${eventId}`);
  }
  }
