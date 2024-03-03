// src/controllers/locationController.js
import Location from '../models/locationModel.js';

export const getLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.json(locations);
  } catch (error) {
    console.error('Error al obtener las ubicaciones:', error);
    res.status(500).send('Error interno del servidor');
  }
};
