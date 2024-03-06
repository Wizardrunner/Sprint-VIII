// src/routes/eventRoutes.js
import express from 'express';
import { getEvents, addEvent, deleteEvent, updateEvent } from '../controllers/eventController.js';

const router = express.Router();

router.get('/', getEvents);
router.post('/', addEvent); // Ruta para añadir un nuevo evento
router.delete('/:id', deleteEvent); // Ruta para eliminar un evento
router.put('/:id', updateEvent); // Ruta para actualizar un evento existente

export default router;
