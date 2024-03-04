// src/routes/eventRoutes.js
import express from 'express';
import { getEvents, addEvent, deleteEvent } from '../controllers/eventController.js';

const router = express.Router();

router.get('/', getEvents);
router.post('/', addEvent); // Ruta para añadir un nuevo evento
router.delete('/:id', deleteEvent); // Ruta para eliminar un evento

export default router;
