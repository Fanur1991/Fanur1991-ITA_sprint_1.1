import { v4 as uuidv4 } from 'uuid';
export interface IToDo {
  id: string;
  title: string;
  isCompleted?: boolean;
}

export class ToDo implements IToDo {
  readonly id: string;
  constructor(public title: string, public isCompleted?: boolean) {
    this.id = uuidv4();
  }
}

export class ToDoList {
  private toDoList: ToDo[] = [];

  addToDo(newToDo: ToDo): ToDo {
    this.toDoList.push(newToDo);
    return newToDo;
  }

  getToDos(): IToDo[] {
    return this.toDoList;
  }

  updateToDo(id: string, title: string): void {
    this.toDoList.forEach((toDo): void => {
      if (toDo.id === id) {
        toDo.title = title;
      }
    });
  }

  changeToDoState(id: string): void {
    this.toDoList.forEach((toDo) => {
      if (toDo.id === id) {
        toDo.isCompleted = !toDo.isCompleted;
      }
    });
  }

  removeToDo(id: string): void {
    this.toDoList = this.toDoList.filter((toDo) => toDo.id !== id);
  }

  removeAllToDos(): void {
    this.toDoList = [];
  }
}
