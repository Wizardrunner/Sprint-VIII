// src/app/bar-chart/bar-chart.component.ts
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { BarChartDataService } from '../services/bar-chart-data.service';

Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  currentYearIndex: number = 0; 
  years: number[] = []; 
  chart: Chart | null = null;

  constructor(private dataService: BarChartDataService) {}

  ngOnInit(): void {
    this.dataService.getBarChartData().subscribe(data => {
      this.years = data.map(d => d.year);
      this.updateChartForYear(this.years[this.currentYearIndex]);
    });
  }

  navigateYears(direction: number): void {
    this.currentYearIndex = (this.currentYearIndex + this.years.length + direction) % this.years.length;
    this.updateChartForYear(this.years[this.currentYearIndex]);
  }

  updateChartForYear(year: number): void {
    this.dataService.getBarChartData().subscribe(data => {
      const yearData = data.find(d => d.year === year);
      if (!yearData) {
        console.error('No data found for year:', year);
        return;
      }
  
      const chartData = {
        labels: ['Technology', 'Clothing', 'Food', 'Home'],
        datasets: [
          {
            label: year.toString(),
            data: [yearData.technology, yearData.clothing, yearData.food, yearData.home],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ]
          }
        ]
      };
  
      if (this.chart) {
        // Si ya existe una gráfica, actualiza sus datos
        this.chart.data = chartData;
        this.chart.update();
      } else {
        // Si la gráfica no existe, crea una nueva
        this.chart = new Chart('barChart', {
          type: 'bar',
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: false
              }
            }
          }
        });
      }
    });
  }
    
}
