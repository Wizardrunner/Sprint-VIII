// src/controllers/barChartDataController.js
import { sequelize } from '../db.js';

export const getBarChartData = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query('SELECT * FROM graphics_barchart');
    res.json(results);
  } catch (error) {
    res.status(500).send(`Error al obtener los datos de la gráfica de barras: ${error.message}`);
  }
};
