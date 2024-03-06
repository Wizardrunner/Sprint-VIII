// src/routes/eventRoutes.js
import express from 'express';
import { getEvents, addEventController, deleteEventController, updateEventController, getEventByIdController } from '../controllers/eventController.js';

const router = express.Router();

router.get('/', getEvents);
router.post('/', addEventController);
router.delete('/:id', deleteEventController);
router.put('/:id', updateEventController);
router.get('/:id', getEventByIdController);

export default router;
