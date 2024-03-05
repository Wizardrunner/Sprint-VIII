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
  styleUrls: ['./pie-chart.component.scss'] 
})
export class PieChartComponent implements OnInit {
  currentMonthIndex: number = new Date().getMonth();
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  chart: any;

  constructor(private dataService: PieChartDataService) {}

  ngOnInit(): void {
    this.updateChartForMonth(this.months[this.currentMonthIndex]);
  }

  navigateMonths(direction: number): void {
    this.currentMonthIndex = (this.currentMonthIndex + 12 + direction) % 12;
    this.updateChartForMonth(this.months[this.currentMonthIndex]);
  }

  updateChartForMonth(month: string): void {
    this.dataService.getPieChartData().subscribe(data => {
      const monthData = data.find(d => d.month === month);
      if (!monthData) {
        console.error('No data found for month:', month);
        return;
      }
  
      const chartData = [monthData.tools, monthData.gardening, monthData.appliances, monthData.apparel];
  
      const currentMonth = this.months[this.currentMonthIndex];
  
      if (this.chart) {
        this.chart.data.datasets[0].data = chartData;
        this.chart.update();
      } else {
        this.chart = new Chart("pieChart", {
          type: 'pie',
          data: {
            labels: ['Tools', 'Gardening', 'Appliances', 'Apparel'],
            datasets: [{
              label: 'Gastos por Categoría',
              data: chartData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
            }]
          },
          options: {
            plugins: {
              legend: {
                position: 'bottom'
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const value = context.parsed;
                    const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                    const percentage = Math.round((value / total) * 100);
        
                    const currentMonth = this.months[this.currentMonthIndex];
        
                    return `${currentMonth}: ${value} (${percentage}%)`;
                  }
                }
              }
            },
            responsive: true,
            maintainAspectRatio: false,
          }
        });
      }
    });
  }
  
  }
