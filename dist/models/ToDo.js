"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoList = exports.ToDo = void 0;
const uuid_1 = require("uuid");
class ToDo {
    constructor(title, isCompleted) {
        this.title = title;
        this.isCompleted = isCompleted;
        this.id = (0, uuid_1.v4)();
    }
}
exports.ToDo = ToDo;
class ToDoList {
    constructor() {
        this.toDoList = [];
    }
    addToDo(newToDo) {
        this.toDoList.push(newToDo);
        return newToDo;
    }
    getToDos() {
        return this.toDoList;
    }
    updateToDo(id, title) {
        this.toDoList.forEach((toDo) => {
            if (toDo.id === id) {
                toDo.title = title;
            }
        });
    }
    changeToDoState(id) {
        this.toDoList.forEach((toDo) => {
            if (toDo.id === id) {
                toDo.isCompleted = !toDo.isCompleted;
            }
        });
    }
    removeToDo(id) {
        this.toDoList = this.toDoList.filter((toDo) => toDo.id !== id);
    }
    removeAllToDos() {
        this.toDoList = [];
    }
}
exports.ToDoList = ToDoList;
//# sourceMappingURL=ToDo.js.map