// src/controllers/eventController.js
// Importa solo las funciones necesarias desde eventModel.js
import { getAllEvents, getEventById as getModelEventById, addEvent as addModelEvent, updateEvent as updateModelEvent, deleteEvent as deleteModelEvent } from '../models/eventModel.js';

// Usando las funciones importadas para las operaciones
export const getEvents = async (req, res) => {
  try {
    const events = await getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).send('Error al obtener eventos: ' + error.message);
  }
};

export const addEventController = async (req, res) => {
  try {
    const { title, start, end } = req.body;
    const eventId = await addModelEvent({ title, start, end });
    res.status(201).json({ message: "Evento añadido con éxito", eventId });
  } catch (error) {
    res.status(500).send('Error al añadir evento: ' + error.message);
  }
};

export const deleteEventController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteModelEvent(id);
    res.json({ message: "Evento eliminado con éxito" });
  } catch (error) {
    res.status(500).send('Error al eliminar evento: ' + error.message);
  }
};

export const updateEventController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, start, end } = req.body;
    const event = await updateModelEvent(id, { title, start, end });
    res.json({ message: "Evento actualizado con éxito" });
  } catch (error) {
    console.error('Error al actualizar el evento:', error);
    res.status(500).send('Error al actualizar el evento: ' + error.message);
  }
};

export const getEventByIdController = async (req, res) => {
  try {
    const event = await getModelEventById(req.params.id);
    if (event) {
      res.json(event);
    } else {
      res.status(404).send('Evento no encontrado');
    }
  } catch (error) {
    console.error('Error al obtener el evento:', error);
    res.status(500).send('Error al obtener el evento: ' + error.message);
  }
};
