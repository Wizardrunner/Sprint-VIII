// src/routes/userRoutes.js
import { Router } from 'express';
import { getUserById, uploadPhoto, getListFiles, downloadPhoto } from '../controllers/userController.js';
import authenticateToken from '../middlewares/authenticateToken.js';
import { idValidator, nameValidator } from '../validations/generic.Validation.js';
import User from '../models/userModel.js'; // Asegúrate de que esta ruta sea correcta
import bcrypt from 'bcrypt';

const router = Router();

// Modificado para devolver una lista de usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll(); // Esto es un ejemplo usando Sequelize
    res.json(users);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Endpoint para crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const { name, email, password, surname } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // 10 es el número de rondas de sal

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword, // Usa la contraseña hasheada
      surname,
    });

    res.status(201).json({ message: "Usuario creado exitosamente", userId: newUser.id });
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).send('Error interno del servidor al crear el usuario');
  }
});

// Endpoint para eliminar un usuario específico
router.delete('/:id_user', async (req, res) => {
  try {
    const id_user = req.params.id_user;
    const userToDelete = await User.findByPk(id_user);

    if (!userToDelete) {
      return res.status(404).send({ message: `Usuario con ID ${id_user} no encontrado.` });
    }

    await User.destroy({
      where: {
        id_user: id_user
      }
    });

    res.send({ message: `Usuario con ID ${id_user} eliminado correctamente.` });
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    res.status(500).send('Error interno del servidor al eliminar el usuario');
  }
});

router.put('/:id_user', async (req, res) => {
  const { id_user } = req.params;
  const { name, surname, email } = req.body;

  try {
    const user = await User.findByPk(id_user);
    if (!user) {
      return res.status(404).send({ message: `Usuario con ID ${id_user} no encontrado.` });
    }

    // Actualiza el usuario con los nuevos datos
    const updatedUser = await user.update({
      name,
      surname,
      email,
      // Asegúrate de actualizar solo los campos que se envían desde el frontend
    });

    res.json(updatedUser);
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).send({ message: 'Error al actualizar el usuario.' });
  }
});

router.get('/:id', authenticateToken, idValidator, getUserById);
router.post("/upload", authenticateToken, uploadPhoto);
router.get("/files",  authenticateToken, getListFiles);
router.get("/files/:name", authenticateToken, nameValidator, downloadPhoto);

export default router;
