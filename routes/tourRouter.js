import express from 'express';
import { getAllTours, getATour, createTour, checkID, checkNameAndPrice } from '../controllers/tourController.js';
const router = express.Router('/users');

router.param('id', checkID);

router.get('/:id', getATour);

router.route('/').get(getAllTours).post(checkNameAndPrice, createTour);

export default router;
