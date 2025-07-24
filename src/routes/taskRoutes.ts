import { Router } from 'express';
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controllers/taskController';
import { validateTask } from '../middleware/validation';

const router = Router();

router.post('/tasksInput', validateTask, createTask);
router.get('/tasksGetByFilter', getTasks);
router.get('/tasksGetByID/:id', getTaskById);
router.put('/tasksUpdate/:id', validateTask, updateTask);
router.delete('/tasksDelete/:id', deleteTask);

export default router;
