// eventModel.js
import { sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

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
  timestamps: false,
  tableName: 'events'
});

// Ahora, en lugar de exportar default, se exporta cada función directamente.
// Esto hace que tanto el modelo Event como mis funciones personalizadas estén disponibles para importar.

async function getAllEvents() {
  try {
    return await Event.findAll();
  } catch (error) {
    throw error;
  }
}

async function getEventById(id) {
  try {
    return await Event.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function addEvent({ title, start, end }) {
  try {
    return await Event.create({ title, start, end });
  } catch (error) {
    throw error;
  }
}

async function updateEvent(id, { title, start, end }) {
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
}

async function deleteEvent(id) {
  try {
    const event = await Event.findByPk(id);
    await event.destroy();
  } catch (error) {
    throw error;
  }
}

// Exporta el modelo y las funciones como un objeto
export { Event, getAllEvents, getEventById, addEvent, updateEvent, deleteEvent };
