import { TestBed } from '@angular/core/testing';

import { PieChartDataService } from './pie-chart-data.service';

describe('PieChartDataService', () => {
  let service: PieChartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieChartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
