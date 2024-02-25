import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { ToDoList, ToDo } from '../models/ToDo';

const toDolist = new ToDoList();
const isCompleted = false;

export const getToDosList = (_req: Request, res: Response) => {
  const toDos = toDolist.getToDos();

  return res.json(toDos);
};

export const createToDo = (req: Request, res: Response) => {
  const { title } = req.body;

  if (title === '') {
    return res.json('Write a task');
  }

  const newToDo = new ToDo(uuidv4(), title, isCompleted);
  toDolist.addToDo(newToDo);

  return res.json(newToDo);
};
