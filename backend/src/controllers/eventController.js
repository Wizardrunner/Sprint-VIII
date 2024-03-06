// src/controllers/eventController.js
import EventModel from '../models/eventModel.js';

export const getEvents = async (req, res) => {
  try {
    const events = await EventModel.getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).send('Error al obtener eventos: ' + error.message);
  }
};

export const addEvent = async (req, res) => {
  try {
    const { title, start, end } = req.body;
    const eventId = await EventModel.addEvent({ title, start, end });
    res.status(201).json({ message: "Evento añadido con éxito", eventId });
  } catch (error) {
    res.status(500).send('Error al añadir evento: ' + error.message);
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await EventModel.deleteEvent(id);
    res.json({ message: "Evento eliminado con éxito" });
  } catch (error) {
    res.status(500).send('Error al eliminar evento: ' + error.message);
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, start, end } = req.body;
    const event = await EventModel.updateEvent(id, { title, start, end });
    res.json({ message: "Evento actualizado con éxito", event });
  } catch (error) {
    console.error('Error al actualizar el evento:', error);
    res.status(500).send('Error al actualizar el evento: ' + error.message);
  }
};
