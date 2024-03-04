// src/routes/locationRoutes.js
import { Router } from 'express';
import { getLocations, addLocation, updateLocation, deleteLocation } from '../controllers/locationController.js';

const router = Router();

router.get('/', getLocations);

router.post('/', addLocation);

// Ruta para actualizar una ubicación
router.patch('/:id', updateLocation);

// Ruta para borrar una ubicación
router.delete('/:id', deleteLocation);

export default router;
