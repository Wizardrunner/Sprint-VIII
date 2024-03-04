// src/app/bar-chart/bar-chart.component.ts
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { BarChartDataService } from '../services/bar-chart-data.service';

Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  template: `<canvas id="barChart"></canvas>`,
  styles: []
})
export class BarChartComponent implements OnInit {
  constructor(private dataService: BarChartDataService) {}

  ngOnInit(): void {
    this.dataService.getBarChartData().subscribe(data => {
      const years = data.map((d: any) => d.year);
      const seriesA = data.map((d: any) => d.series_a);
      const seriesB = data.map((d: any) => d.series_b);

      const chart = new Chart("barChart", {
        type: 'bar',
        data: {
          labels: years, // Usamos los años como etiquetas
          datasets: [{
            label: 'Series A',
            data: seriesA, // Datos para la serie A
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
          }, {
            label: 'Series B',
            data: seriesB, // Datos para la serie B
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }
}
