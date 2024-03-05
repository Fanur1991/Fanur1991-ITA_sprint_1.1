"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeToDos = exports.removeToDo = exports.updateToDoState = exports.updateToDo = exports.createToDo = exports.getToDosList = void 0;
const ToDo_1 = require("../models/ToDo");
const toDolist = new ToDo_1.ToDoList();
const isCompleted = false;
// get todo controller
const getToDosList = (_req, res) => {
    const toDos = toDolist.getToDos();
    return res.json(toDos);
};
exports.getToDosList = getToDosList;
// create new todo controller
const createToDo = (req, res) => {
    const { title } = req.body;
    if (title === '') {
        return res.json({ message: 'Write a task' });
    }
    const newToDo = new ToDo_1.ToDo(title, isCompleted);
    toDolist.addToDo(newToDo);
    return res.json(newToDo);
};
exports.createToDo = createToDo;
// update todo title controller
const updateToDo = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    toDolist.updateToDo(id, title);
    const toDos = toDolist.getToDos();
    return res.json(toDos);
};
exports.updateToDo = updateToDo;
// update todo state controller
const updateToDoState = (req, res) => {
    const { id } = req.params;
    toDolist.changeToDoState(id);
    const toDos = toDolist.getToDos();
    return res.json(toDos);
};
exports.updateToDoState = updateToDoState;
// remove a todo controller
const removeToDo = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.json({ message: 'That todo does not exist' });
    }
    toDolist.removeToDo(id);
    return res.json({ message: 'Todo had been removed' });
};
exports.removeToDo = removeToDo;
// remove all todos controller
const removeToDos = (_req, res) => {
    toDolist.removeAllToDos();
    return res.json({ message: 'All todos had been removed' });
};
exports.removeToDos = removeToDos;
//# sourceMappingURL=toDoControllers.js.map