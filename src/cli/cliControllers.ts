import inquirer from 'inquirer';
import colors from 'colors';
import { ToDo, ToDoList } from '../models/ToDo';

export const toDoList = new ToDoList();

export const addToDo = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      prefix: '',
      message: 'New todo:',
    },
  ]);

  const newToDo = new ToDo(answers.text, false);
  toDoList.addToDo(newToDo);
  console.log(colors.green('\n---------------------------------'));
  console.log(colors.green('Todo has been added successfully! 🎉'));
  console.log(colors.green('---------------------------------\n'));
};

export const getToDos = async () => {
  const toDos = toDoList.getToDos();

  console.log(' ');
  console.log(colors.yellow(`\nTotal todos: ${toDos.length}\n`));
  console.log(' ');
  toDos.forEach((toDo, index): void => {
    const status = toDo.isCompleted
      ? colors.green('✓ Completed')
      : colors.red('✗ Not completed');
    console.log(`${colors.grey(index + 1 + '.')} ${toDo.title} - ${status}`);
  });
  console.log(' ');
};

export const updateToDo = async () => {
  const toDos = toDoList.getToDos();
  if (toDos.length === 0) {
    console.log(colors.yellow('No todos to update. 🤷‍♂️'));
    return;
  }
  const choices = toDos.map((toDo) => ({
    name: toDo.title,
    value: toDo.id,
  }));

  const { id } = await inquirer.prompt([
    {
      type: 'list',
      name: 'id',
      message: 'Select the todo to update:',
      choices,
    },
  ]);

  const { title } = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'New title:',
    },
  ]);

  toDoList.updateToDo(id, title);
  console.log(' ');
  console.log(colors.green('Todo updated successfully! ✅'));
  console.log(' ');
};

export const changeToDoState = async () => {
  const toDos = toDoList.getToDos();
  if (toDos.length === 0) {
    console.log(colors.yellow('No todos to change state. 🤷‍♂️'));
    return;
  }
  const choices = toDos.map((toDo) => ({
    name: `${toDo.title} [${toDo.isCompleted ? 'Completed' : 'Not Completed'}]`,
    value: toDo.id,
  }));

  const { id } = await inquirer.prompt([
    {
      type: 'list',
      name: 'id',
      message: 'Select the todo to change state:',
      choices,
    },
  ]);

  toDoList.changeToDoState(id);
  console.log(' ');
  console.log(colors.green('Todo state changed successfully! 🔁'));
  console.log(' ');
};

export const removeToDo = async () => {
  const toDos = toDoList.getToDos();
  if (toDos.length === 0) {
    console.log(colors.yellow('No todos to remove. 🤷‍♂️'));
    return;
  }
  const choices = toDos.map((toDo) => ({
    name: toDo.title,
    value: toDo.id,
  }));

  const { id } = await inquirer.prompt([
    {
      type: 'list',
      name: 'id',
      message: 'Select the todo to remove:',
      choices,
    },
  ]);

  toDoList.removeToDo(id);
  console.log(' ');
  console.log(colors.green('Todo removed successfully! 🗑️'));
  console.log(' ');
};

export const removeAllToDos = async () => {
  console.log(colors.yellow('\n---------------------------------'));
  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: colors.red('Are you sure you want to remove all todos?'),
      default: false,
    },
  ]);

  if (confirm) {
    toDoList.removeAllToDos();
    console.log(' ');
    console.log(colors.green('All todos removed successfully'));
    console.log(' ');
  } else {
    console.log(' ');
    console.log(colors.yellow('Operation canceled'));
    console.log(' ');
  }
  console.log(colors.yellow('---------------------------------\n'));
};
