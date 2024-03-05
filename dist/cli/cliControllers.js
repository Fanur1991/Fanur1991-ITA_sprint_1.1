"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllToDos = exports.removeToDo = exports.changeToDoState = exports.updateToDo = exports.getToDos = exports.addToDo = exports.toDoList = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const colors_1 = __importDefault(require("colors"));
const ToDo_1 = require("../models/ToDo");
exports.toDoList = new ToDo_1.ToDoList();
const addToDo = () => __awaiter(void 0, void 0, void 0, function* () {
    const answers = yield inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'text',
            prefix: '',
            message: 'New todo:',
        },
    ]);
    const newToDo = new ToDo_1.ToDo(answers.text, false);
    exports.toDoList.addToDo(newToDo);
    console.log(colors_1.default.green('\n---------------------------------'));
    console.log(colors_1.default.green('Todo has been added successfully! 🎉'));
    console.log(colors_1.default.green('---------------------------------\n'));
});
exports.addToDo = addToDo;
const getToDos = () => __awaiter(void 0, void 0, void 0, function* () {
    const toDos = exports.toDoList.getToDos();
    console.log(' ');
    console.log(colors_1.default.yellow(`\nTotal todos: ${toDos.length}\n`));
    console.log(' ');
    toDos.forEach((toDo, index) => {
        const status = toDo.isCompleted
            ? colors_1.default.green('✓ Completed')
            : colors_1.default.red('✗ Not completed');
        console.log(`${colors_1.default.grey(index + 1 + '.')} ${toDo.title} - ${status}`);
    });
    console.log(' ');
});
exports.getToDos = getToDos;
const updateToDo = () => __awaiter(void 0, void 0, void 0, function* () {
    const toDos = exports.toDoList.getToDos();
    if (toDos.length === 0) {
        console.log(colors_1.default.yellow('No todos to update. 🤷‍♂️'));
        return;
    }
    const choices = toDos.map((toDo) => ({
        name: toDo.title,
        value: toDo.id,
    }));
    const { id } = yield inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'id',
            message: 'Select the todo to update:',
            choices,
        },
    ]);
    const { title } = yield inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'New title:',
        },
    ]);
    exports.toDoList.updateToDo(id, title);
    console.log(' ');
    console.log(colors_1.default.green('Todo updated successfully! ✅'));
    console.log(' ');
});
exports.updateToDo = updateToDo;
const changeToDoState = () => __awaiter(void 0, void 0, void 0, function* () {
    const toDos = exports.toDoList.getToDos();
    if (toDos.length === 0) {
        console.log(colors_1.default.yellow('No todos to change state. 🤷‍♂️'));
        return;
    }
    const choices = toDos.map((toDo) => ({
        name: `${toDo.title} [${toDo.isCompleted ? 'Completed' : 'Not Completed'}]`,
        value: toDo.id,
    }));
    const { id } = yield inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'id',
            message: 'Select the todo to change state:',
            choices,
        },
    ]);
    exports.toDoList.changeToDoState(id);
    console.log(' ');
    console.log(colors_1.default.green('Todo state changed successfully! 🔁'));
    console.log(' ');
});
exports.changeToDoState = changeToDoState;
const removeToDo = () => __awaiter(void 0, void 0, void 0, function* () {
    const toDos = exports.toDoList.getToDos();
    if (toDos.length === 0) {
        console.log(colors_1.default.yellow('No todos to remove. 🤷‍♂️'));
        return;
    }
    const choices = toDos.map((toDo) => ({
        name: toDo.title,
        value: toDo.id,
    }));
    const { id } = yield inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'id',
            message: 'Select the todo to remove:',
            choices,
        },
    ]);
    exports.toDoList.removeToDo(id);
    console.log(' ');
    console.log(colors_1.default.green('Todo removed successfully! 🗑️'));
    console.log(' ');
});
exports.removeToDo = removeToDo;
const removeAllToDos = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(colors_1.default.yellow('\n---------------------------------'));
    const { confirm } = yield inquirer_1.default.prompt([
        {
            type: 'confirm',
            name: 'confirm',
            message: colors_1.default.red('Are you sure you want to remove all todos?'),
            default: false,
        },
    ]);
    if (confirm) {
        exports.toDoList.removeAllToDos();
        console.log(' ');
        console.log(colors_1.default.green('All todos removed successfully'));
        console.log(' ');
    }
    else {
        console.log(' ');
        console.log(colors_1.default.yellow('Operation canceled'));
        console.log(' ');
    }
    console.log(colors_1.default.yellow('---------------------------------\n'));
});
exports.removeAllToDos = removeAllToDos;
//# sourceMappingURL=cliControllers.js.map