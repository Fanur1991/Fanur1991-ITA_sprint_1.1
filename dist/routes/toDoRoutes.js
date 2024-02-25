import { Router } from 'express';
import { getToDosList, createToDo, removeToDo, removeToDos, updateToDo, updateToDoState, } from '../controllers/toDoControllers';
const router = Router();
router.get('/todos', getToDosList);
router.post('/todo', createToDo);
router.put('/todos/update/:id', updateToDo);
router.patch('/todos/update/:id', updateToDoState);
router.delete('/todos/remove/:id', removeToDo);
router.delete('/todos/remove-all', removeToDos);
export default router;
//# sourceMappingURL=toDoRoutes.js.map