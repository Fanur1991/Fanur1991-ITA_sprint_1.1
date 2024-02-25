export interface IToDo {
  id: string;
  title: string;
  isCompleted?: boolean;
}

export class ToDo implements IToDo {
  constructor(
    readonly id: string,
    public title: string,
    public isCompleted?: boolean
  ) {}
}

export class ToDoList {
  private toDoList: ToDo[] = [];

  addToDo(newToDo: ToDo): void {
    this.toDoList.push(newToDo);
  }

  getToDos(): IToDo[] {
    return this.toDoList;
  }

  updateToDo(id: string, title: string): void {
    this.toDoList.map((toDo): void => {
      if (toDo.id === id) {
        toDo.title = title;
      }
    });
  }

  changeToDoState(id: string): void {
    this.toDoList.map((toDo) => {
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
