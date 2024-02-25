import inquirer from 'inquirer';
import colors from 'colors';
import {
  addToDo,
  changeToDoState,
  getToDos,
  removeAllToDos,
  removeToDo,
  updateToDo,
} from './cliControllers';

async function main() {
  console.clear();
  console.log(colors.cyan('Welcome to the ToDo CLI! 📝'));
  console.log(colors.cyan('---------------------------------'));
  let answer = null;
  while (answer !== 'Exit') {
    console.log(colors.yellow('\nMain Menu:'));
    answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        prefix: '>',
        message: colors.magenta('What would you like to do?'),
        choices: [
          { name: 'Add a new todo', value: 'To add todo' },
          { name: 'View all todos', value: 'To get all todos' },
          { name: 'Update a todo', value: 'To update todo' },
          { name: 'Change todo state', value: 'To change todo state' },
          { name: 'Delete a todo', value: 'Delete todo' },
          { name: 'Delete all todos', value: 'Delete all todo' },
          { name: colors.red('Exit'), value: 'Exit' },
        ],
        loop: false,
      },
    ]);

    switch (answer.action) {
      case 'To add todo':
        await addToDo();
        break;
      case 'To get all todos':
        await getToDos();
        break;
      case 'To update todo':
        await updateToDo();
        break;
      case 'To change todo state':
        await changeToDoState();
        break;
      case 'Delete todo':
        await removeToDo();
        break;
      case 'Delete all todo':
        await removeAllToDos();
        break;
      case 'Exit':
        console.log(colors.green('\nThank you for using ToDo CLI! 🌟\n'));
        process.exit(0);
    }
  }
}

main();
