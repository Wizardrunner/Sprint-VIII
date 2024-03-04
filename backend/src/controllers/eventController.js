// src/controllers/eventController.js
import { sequelize } from '../db.js'; 

export const getEvents = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query('SELECT * FROM events');
    res.json(results);
  } catch (error) {
    res.status(500).send('Error al obtener eventos');
  }
};
