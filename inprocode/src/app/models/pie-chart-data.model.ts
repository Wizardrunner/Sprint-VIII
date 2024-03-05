// src/app/models/pie-chart-data.model.ts
export interface PieChartData {
    id: number;
    month: string;
    tools: number;
    gardening: number;
    appliances: number;
    apparel: number;
    [key: string]: string | number;
  }
  