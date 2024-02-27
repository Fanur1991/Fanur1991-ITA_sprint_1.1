import { ToDoList, ToDo } from '../models/ToDo.js';
const toDolist = new ToDoList();
const isCompleted = false;
// get todo controller
export const getToDosList = (_req, res) => {
    const toDos = toDolist.getToDos();
    return res.json(toDos);
};
// create new todo controller
export const createToDo = (req, res) => {
    const { title } = req.body;
    if (title === '') {
        return res.json({ message: 'Write a task' });
    }
    const newToDo = new ToDo(title, isCompleted);
    toDolist.addToDo(newToDo);
    return res.json(newToDo);
};
// update todo title controller
export const updateToDo = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    toDolist.updateToDo(id, title);
    const toDos = toDolist.getToDos();
    return res.json(toDos);
};
// update todo state controller
export const updateToDoState = (req, res) => {
    const { id } = req.params;
    toDolist.changeToDoState(id);
    const toDos = toDolist.getToDos();
    return res.json(toDos);
};
// remove a todo controller
export const removeToDo = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.json({ message: 'That todo does not exist' });
    }
    toDolist.removeToDo(id);
    return res.json({ message: 'Todo had been removed' });
};
// remove all todos controller
export const removeToDos = (_req, res) => {
    toDolist.removeAllToDos();
    return res.json({ message: 'All todos had been removed' });
};
//# sourceMappingURL=toDoControllers.js.map