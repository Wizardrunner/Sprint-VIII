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

export const addLocation = async (req, res) => {
    try {
      const { name, latitude, longitude } = req.body;
      const newLocation = await Location.create({ name, latitude, longitude });
      res.status(201).json(newLocation);
    } catch (error) {
        console.error('Error al añadir la ubicación:', error);
        res.status(500).send('Error interno del servidor: ' + error.message);
      }
  };
  
// Actualizar una ubicación
export const updateLocation = async (req, res) => {
    const { id } = req.params;
    const { name, latitude, longitude } = req.body;

    try {
        const location = await Location.findByPk(id);
        if (!location) {
            return res.status(404).send('Ubicación no encontrada');
        }

        location.name = name;
        location.latitude = latitude;
        location.longitude = longitude;
        await location.save();

        res.json(location);
    } catch (error) {
        res.status(500).send('Error interno del servidor');
    }
};

// Borrar una ubicación
export const deleteLocation = async (req, res) => {
    const { id } = req.params;

    try {
        const location = await Location.findByPk(id);
        if (!location) {
            return res.status(404).json({ message: 'Ubicación no encontrada' });
        }

        await location.destroy();
        // Envía una respuesta JSON en lugar de texto plano
        res.json({ message: 'Ubicación eliminada con éxito' });
    } catch (error) {
        console.error('Error al eliminar la ubicación:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
