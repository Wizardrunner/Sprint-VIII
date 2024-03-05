// src/app/graficas/graficas.component.ts
import { Component } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component'; 
@Component({
  selector: 'app-graficas',
  standalone: true,
  imports: [BarChartComponent, PieChartComponent], 
  templateUrl: './graficas.component.html',
  styles: []
})
export class GraficasComponent {}
