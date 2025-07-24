import { Router } from 'express';
import { createTask} from '../controllers/taskController';
import { validateTask } from '../middleware/validation';

const router = Router();

router.post('/tasksInput', validateTask, createTask);


export default router;