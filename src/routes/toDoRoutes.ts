import { Router } from 'express';
import { getToDosList, createToDo } from '../controllers/toDoControllers';

const router = Router();

router.get('/', getToDosList);
router.post('/', createToDo);

export default router;
