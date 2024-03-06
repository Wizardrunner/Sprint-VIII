// eventModel.js
// Importar Sequelize y la instancia de conexión a la base de datos
import { sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

// Definir el modelo 'Event' usando la instancia 'sequelize'
const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  start: {
    type: DataTypes.DATE,
    allowNull: false
  },
  end: {
    type: DataTypes.DATE
  }
}, {
  // Opciones adicionales del modelo
  timestamps: false,
  tableName: 'events'
});

export default {
  // Obtener todos los eventos
  getAllEvents: async () => {
    try {
      return await Event.findAll();
    } catch (error) {
      throw error;
    }
  },

  // Obtener un evento por ID
  getEventById: async (id) => {
    try {
      return await Event.findByPk(id);
    } catch (error) {
      throw error;
    }
  },

  // Añadir un nuevo evento
  addEvent: async ({ title, start, end }) => {
    try {
      return await Event.create({ title, start, end });
    } catch (error) {
      throw error;
    }
  },

  // Actualizar un evento existente
  updateEvent: async (id, { title, start, end }) => {
    try {
      const event = await Event.findByPk(id);
      if (!event) {
        throw new Error('Evento no encontrado');
      }
      event.title = title;
      event.start = start;
      event.end = end;
      await event.save();
      return event;
    } catch (error) {
      throw error;
    }
    },

  // Eliminar un evento
  deleteEvent: async (id) => {
    try {
      const event = await Event.findByPk(id);
      await event.destroy();
    } catch (error) {
      throw error;
    }
  }
};
