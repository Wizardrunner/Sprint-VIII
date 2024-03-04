// src/app/graficas/graficas.component.ts
import { Component } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component'; 
@Component({
  selector: 'app-graficas',
  standalone: true,
  imports: [BarChartComponent, PieChartComponent], 
  template: `
    <div>
      <h2>Gráficos</h2>
      <app-bar-chart></app-bar-chart>
      <app-pie-chart></app-pie-chart>
    </div>
  `,
  styles: []
})
export class GraficasComponent {}
