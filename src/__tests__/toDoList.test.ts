import { describe, expect, it, beforeEach } from '@jest/globals';
import { ToDo, ToDoList } from '../models/ToDo';

describe('todolist', () => {
  const toDoList = new ToDoList();

  beforeEach(() => {
    toDoList.removeAllToDos();
  });

  it('should create new todo', () => {
    const newToDo = new ToDo('1', 'To learn Node.Js', false);

    expect(newToDo.id).toBe('1');
    expect(newToDo.title).toBe('To learn Node.Js');
    expect(newToDo.isCompleted).toBe(false);
  });

  it('should add new todo in todo list', () => {
    const newToDo = new ToDo('1', 'To learn TDD', false);
    toDoList.addToDo(newToDo);

    expect(toDoList).toBeInstanceOf(ToDoList);
    expect(toDoList.getToDos()).toContain(newToDo);
  });

  it('should update todo title', () => {
    const newToDo = new ToDo('1', 'To learn SOLID', false);
    toDoList.addToDo(newToDo);
    toDoList.updateToDo('1', 'To learn clean architecture');

    const updatedToDo = toDoList.getToDos().find((todo) => todo.id === '1');

    expect(updatedToDo?.title).toBe('To learn clean architecture');
  });

  it('should change todo state', () => {
    const newToDo1 = new ToDo('1', 'To learn Jest', false);
    const newToDo2 = new ToDo('2', 'To do own pet project', true);
    toDoList.addToDo(newToDo1);
    toDoList.addToDo(newToDo2);
    toDoList.changeToDoState('1');
    toDoList.changeToDoState('2');

    expect(newToDo1.isCompleted).toBe(true);
    expect(newToDo2.isCompleted).toBe(false);
  });

  it('should remove a todo', () => {
    const newToDo1 = new ToDo('1', 'To finish this project', false);
    const newToDo2 = new ToDo('2', 'To learn TypeScript', false);
    toDoList.addToDo(newToDo1);
    toDoList.addToDo(newToDo2);
    toDoList.removeToDo('2');
    const toDolistLength = toDoList.getToDos();

    expect(toDoList.getToDos()).toContain(newToDo1);
    expect(toDoList.getToDos()).not.toContain(newToDo2);
    expect(toDolistLength.length).toBe(1);
  });

  it('should remove all todos', () => {
    const newToDo1 = new ToDo('2', 'To do frontend part', false);
    const newToDo2 = new ToDo('3', 'To aprove all tests', false);
    toDoList.addToDo(newToDo1);
    toDoList.addToDo(newToDo2);
    toDoList.removeAllToDos();

    expect(toDoList.getToDos().length).toBe(0);
  });
});
