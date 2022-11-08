import express from 'express';

import TodoRouter from './todo';

const { Router } = express;
const router = Router();

router.use('/todo', TodoRouter);

export default router;
