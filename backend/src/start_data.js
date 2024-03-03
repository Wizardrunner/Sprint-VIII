// src/start_data.js
import User from './models/userModel.js';
import Book from './models/bookModel.js';


const insertInitialUserData = async () => {

  const userData = [
    { email: 'ismael.academy@gmail.com', password: '$2b$10$tXrqo7VdSPCLAsIUhrVsYejYeMt9FLo9J4OchgCKwuDvpeDK6Xf1q',name: 'Ismael', }, //pass: ismael123
    { email: 'laura@hotmail.com', password: '$2b$10$tXrqo7VdSPCLAsIUhrVsYejYeMt9FLo9J4OchgCKwuDvpeDK6Xf1q', name: 'Laura' },
    { email: 'maria@hotmail.com', password: '$2b$10$tXrqo7VdSPCLAsIUhrVsYejYeMt9FLo9J4OchgCKwuDvpeDK6Xf1q', name: 'Maria', surname: 'kale' }
  ];
  // Insertar datos con opción ignoreDuplicates
  // Para actualizar todas las filas: updateOnDuplicate: Object.keys(User.rawAttributes)
  await User.bulkCreate(userData, { ignoreDuplicates: true });
  
  const bookData = [
    { title: 'TituloA', year: 1955 },
    { title: 'TituloB', year: 1988 },
    { title: 'TituloC', year: 1475, user_id: 2 }
  ];
  // Insertar datos con opción ignoreDuplicates
  await Book.bulkCreate(bookData, { ignoreDuplicates: true });
}

export { insertInitialUserData };
