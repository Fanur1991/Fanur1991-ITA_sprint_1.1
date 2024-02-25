import { describe, expect, it, beforeEach } from '@jest/globals';
import { ToDo, ToDoList } from '../models/ToDo';

describe('todolist', () => {
  const toDoList = new ToDoList();

  beforeEach(() => {
    toDoList.removeAllToDos();
  });

  it('should add new todo in todo list', () => {
    const newToDo = new ToDo('To learn TDD', false);

    const actualToDo = toDoList.addToDo(newToDo);

    expect(toDoList).toBeInstanceOf(ToDoList);
    expect(actualToDo).toEqual(
      expect.objectContaining({
        title: 'To learn TDD',
        isCompleted: false,
      })
    );
  });

  it('should update todo title', () => {
    const newToDo = toDoList.addToDo(new ToDo('To learn SOLID', false));
    toDoList.updateToDo(newToDo.id, 'To learn clean architecture');

    const updatedToDo = toDoList
      .getToDos()
      .find((todo) => todo.id === newToDo.id);

    expect(updatedToDo?.title).toBe('To learn clean architecture');
  });

  it.each([
    ['To learn Jest', false, true],
    ['To do own pet project', true, false],
  ])('should change todo state', (title, isCompleted, expected) => {
    const newToDo = new ToDo(title, isCompleted);
    toDoList.addToDo(newToDo);

    toDoList.changeToDoState(newToDo.id);

    expect(newToDo.isCompleted).toBe(expected);
  });

  it('should remove a todo', () => {
    const newToDo1 = new ToDo('To finish this project', false);
    const newToDo2 = new ToDo('To learn TypeScript', false);
    toDoList.addToDo(newToDo1);
    toDoList.addToDo(newToDo2);

    toDoList.removeToDo(newToDo2.id);

    const toDolistLength = toDoList.getToDos();

    expect(toDoList.getToDos()).toContain(newToDo1);
    expect(toDoList.getToDos()).not.toContain(newToDo2);
    expect(toDolistLength.length).toBe(1);
  });

  it('should remove all todos', () => {
    const newToDo1 = new ToDo('To do frontend part', false);
    const newToDo2 = new ToDo('To aprove all tests', false);
    toDoList.addToDo(newToDo1);
    toDoList.addToDo(newToDo2);

    toDoList.removeAllToDos();

    expect(toDoList.getToDos().length).toBe(0);
  });
});
