// src/app/pie-chart/pie-chart.component.ts
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { PieChartDataService } from '../services/pie-chart-data.service';

Chart.register(...registerables);

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styles: []
})
export class PieChartComponent implements OnInit {
  constructor(private dataService: PieChartDataService) {}

  ngOnInit(): void {
    this.dataService.getPieChartData().subscribe(data => {
      const labels = data.map((d: any) => d.month);
      const toys = data.map((d: any) => d.toys);
      const electronics = data.map((d: any) => d.electronics);
      const groceries = data.map((d: any) => d.groceries);
      const furniture = data.map((d: any) => d.furniture);

      const chart = new Chart("pieChart", {
        type: 'pie',
        data: {
          labels: labels, // Meses como etiquetas
          datasets: [{
            label: 'Gastos por Categoría',
            data: [toys.reduce((a, b) => a + b, 0), electronics.reduce((a, b) => a + b, 0), groceries.reduce((a, b) => a + b, 0), furniture.reduce((a, b) => a + b, 0)],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
          }]
        },
      });
    });
  }
}
