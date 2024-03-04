// src/app/services/pie-chart-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PieChartData } from '../models/pie-chart-data.model'; 

@Injectable({
  providedIn: 'root'
})
export class PieChartDataService {
  private baseUrl = 'http://localhost:3000/chart/pieChartData';

  constructor(private http: HttpClient) {}

  getPieChartData(): Observable<PieChartData[]> {
    return this.http.get<PieChartData[]>(this.baseUrl).pipe(
      map(data => 
        data.map(item => ({
          ...item,
          toys: +item.toys,
          electronics: +item.electronics,
          groceries: +item.groceries,
          furniture: +item.furniture
        }))
      )
    );
  }
}
