"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const toDoService_1 = require("../services/toDoService");
(0, globals_1.describe)('addToDo', () => {
    (0, globals_1.test)('should add new todo in todo list', () => {
        const newToDo = toDoService_1.addToDo;
        (0, globals_1.expect)(newToDo('ToDo 1')).toBe(1);
    });
});
(0, globals_1.describe)('getToDos', () => {
    (0, globals_1.test)('should return todo list', () => {
        const toDoList = toDoService_1.getToDos;
        (0, globals_1.expect)(toDoList()).toEqual([
            { id: 1, title: 'ToDo 1', isCompleted: false },
        ]);
    });
});
