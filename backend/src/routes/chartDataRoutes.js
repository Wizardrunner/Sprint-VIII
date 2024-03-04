// src/routes/chartDataRoutes.js
import express from 'express';
import { getBarChartData } from '../controllers/barChartDataController.js';
import { getPieChartData } from '../controllers/pieChartDataController.js';

const router = express.Router();

router.get('/barChartData', getBarChartData);
router.get('/pieChartData', getPieChartData);

export default router;
