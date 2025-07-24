import { Router } from 'express';
import { createTask, getTasks, getTaskById } from '../controllers/taskController';
import { validateTask } from '../middleware/validation';

const router = Router();

router.post('/tasksInput', validateTask, createTask);
router.get('/tasksGetByFilter', getTasks);
router.get('/tasksGetByID/:id', getTaskById);

export default router;