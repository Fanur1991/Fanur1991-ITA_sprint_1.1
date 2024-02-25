"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToDo = exports.getToDosList = void 0;
const toDoService_1 = require("../services/toDoService");
const getToDosList = (_req, res) => {
    const toDoList = (0, toDoService_1.getToDos)();
    if (!toDoList)
        res.status(404).json('Todo list is not exist');
    res.status(200).json(toDoList);
};
exports.getToDosList = getToDosList;
const createToDo = (req, res) => {
    const title = req.body;
    const newToDo = (0, toDoService_1.addToDo)(title);
    res.status(200).json(newToDo);
};
exports.createToDo = createToDo;
