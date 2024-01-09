import express from 'express';
import userRouter from './routes/userRoutes.js';
import tourRouter from './routes/tourRouter.js';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/users', userRouter);
app.use('/tours', tourRouter);

export default app;
