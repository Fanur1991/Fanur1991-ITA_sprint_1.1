var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from 'inquirer';
import colors from 'colors';
import { ToDo, ToDoList } from '../models/ToDo.js';
export const toDoList = new ToDoList();
export const addToDo = () => __awaiter(void 0, void 0, void 0, function* () {
    const answers = yield inquirer.prompt([
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
});
export const getToDos = () => __awaiter(void 0, void 0, void 0, function* () {
    const toDos = toDoList.getToDos();
    console.log(' ');
    console.log(colors.yellow(`\nTotal todos: ${toDos.length}\n`));
    console.log(' ');
    toDos.forEach((toDo, index) => {
        const status = toDo.isCompleted
            ? colors.green('✓ Completed')
            : colors.red('✗ Not completed');
        console.log(`${colors.grey(index + 1 + '.')} ${toDo.title} - ${status}`);
    });
    console.log(' ');
});
export const updateToDo = () => __awaiter(void 0, void 0, void 0, function* () {
    const toDos = toDoList.getToDos();
    if (toDos.length === 0) {
        console.log(colors.yellow('No todos to update. 🤷‍♂️'));
        return;
    }
    const choices = toDos.map((toDo) => ({
        name: toDo.title,
        value: toDo.id,
    }));
    const { id } = yield inquirer.prompt([
        {
            type: 'list',
            name: 'id',
            message: 'Select the todo to update:',
            choices,
        },
    ]);
    const { title } = yield inquirer.prompt([
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
});
export const changeToDoState = () => __awaiter(void 0, void 0, void 0, function* () {
    const toDos = toDoList.getToDos();
    if (toDos.length === 0) {
        console.log(colors.yellow('No todos to change state. 🤷‍♂️'));
        return;
    }
    const choices = toDos.map((toDo) => ({
        name: `${toDo.title} [${toDo.isCompleted ? 'Completed' : 'Not Completed'}]`,
        value: toDo.id,
    }));
    const { id } = yield inquirer.prompt([
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
});
export const removeToDo = () => __awaiter(void 0, void 0, void 0, function* () {
    const toDos = toDoList.getToDos();
    if (toDos.length === 0) {
        console.log(colors.yellow('No todos to remove. 🤷‍♂️'));
        return;
    }
    const choices = toDos.map((toDo) => ({
        name: toDo.title,
        value: toDo.id,
    }));
    const { id } = yield inquirer.prompt([
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
});
export const removeAllToDos = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(colors.yellow('\n---------------------------------'));
    const { confirm } = yield inquirer.prompt([
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
    }
    else {
        console.log(' ');
        console.log(colors.yellow('Operation canceled'));
        console.log(' ');
    }
    console.log(colors.yellow('---------------------------------\n'));
});
//# sourceMappingURL=cliControllers.js.map