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
  styles: []
})
export class BarChartComponent implements OnInit {
  constructor(private dataService: BarChartDataService) {}

  ngOnInit(): void {
    this.dataService.getBarChartData().subscribe(data => {
      const years = data.map(d => d.year.toString());
      const technology = data.map(d => d.technology);
      const clothing = data.map(d => d.clothing);
      const food = data.map(d => d.food);
      const home = data.map(d => d.home);
  
      const chart = new Chart("barChart", {
        type: 'bar',
        data: {
          labels: years,
          datasets: [
            {
              label: 'Technology',
              data: technology,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
              label: 'Clothing',
              data: clothing,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
            },
            {
              label: 'Food',
              data: food,
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
            },
            {
              label: 'Home',
              data: home,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
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
