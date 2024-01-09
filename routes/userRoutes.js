import express from 'express';
import { getAllUsers, getAUser, createUser, updateUser, deleteUser } from '../controllers/userController.js';
const router = express.Router('/users');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getAUser).patch(updateUser).delete(deleteUser);

export default router;
