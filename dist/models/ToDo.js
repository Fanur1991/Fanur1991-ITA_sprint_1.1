import { v4 as uuidv4 } from 'uuid';
export class ToDo {
    constructor(title, isCompleted) {
        this.title = title;
        this.isCompleted = isCompleted;
        this.id = uuidv4();
    }
}
export class ToDoList {
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
//# sourceMappingURL=ToDo.js.map