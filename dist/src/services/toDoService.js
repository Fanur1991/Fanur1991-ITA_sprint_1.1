"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToDos = exports.addToDo = void 0;
const ToDo_1 = require("../models/ToDo");
let toDoList = [];
let toDoId = 0;
const addToDo = (title) => {
    const newToDo = new ToDo_1.ToDo(++toDoId, title, false);
    toDoList.push(newToDo);
    return toDoId;
};
exports.addToDo = addToDo;
const getToDos = () => {
    return toDoList;
};
exports.getToDos = getToDos;
// // removeToDo(): void;
// // updateToDO(): object[];
