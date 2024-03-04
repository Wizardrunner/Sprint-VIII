// eventModel.js
import db from './db.js'; // Asegúrate de tener una conexión a la base de datos configurada

class EventModel {
  // Obtener todos los eventos
  static getAllEvents() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM events', (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }

  // Obtener un evento por ID
  static getEventById(id) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM events WHERE id = ?', [id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results[0]);
      });
    });
  }

  // Añadir un nuevo evento
  static addEvent({ title, start, end }) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO events (title, start, end) VALUES (?, ?, ?)';
      db.query(query, [title, start, end], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.insertId);
      });
    });
  }

  // Actualizar un evento existente
  static updateEvent(id, { title, start, end }) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE events SET title = ?, start = ?, end = ? WHERE id = ?';
      db.query(query, [title, start, end, id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.affectedRows);
      });
    });
  }

  // Eliminar un evento
  static deleteEvent(id) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM events WHERE id = ?', [id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.affectedRows);
      });
    });
  }
}

export default EventModel;
