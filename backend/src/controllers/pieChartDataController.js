// src/controllers/pieChartDataController.js
import { sequelize } from '../db.js';

export const getPieChartData = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query('SELECT * FROM graphics_piechart');
    res.json(results);
  } catch (error) {
    res.status(500).send(`Error al obtener los datos de la gráfica de tarta: ${error.message}`);
  }
};
