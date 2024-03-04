// src/app/services/bar-chart-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BarChartData } from '../models/bar-chart-data.model'; 

@Injectable({
  providedIn: 'root'
})
export class BarChartDataService {
  private baseUrl = 'http://localhost:3000/chart/barChartData';

  constructor(private http: HttpClient) {}

  getBarChartData(): Observable<BarChartData[]> {
    return this.http.get<BarChartData[]>(this.baseUrl);
  }
}
