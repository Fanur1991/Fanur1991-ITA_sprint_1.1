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
import { addToDo, changeToDoState, getToDos, removeAllToDos, removeToDo, updateToDo, } from './cliControllers.js';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.clear();
        console.log(colors.cyan('Welcome to the ToDo CLI! 📝'));
        console.log(colors.cyan('---------------------------------'));
        let answer = null;
        while (answer !== 'Exit') {
            console.log(colors.yellow('\nMain Menu:'));
            answer = yield inquirer.prompt([
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
                    yield addToDo();
                    break;
                case 'To get all todos':
                    yield getToDos();
                    break;
                case 'To update todo':
                    yield updateToDo();
                    break;
                case 'To change todo state':
                    yield changeToDoState();
                    break;
                case 'Delete todo':
                    yield removeToDo();
                    break;
                case 'Delete all todo':
                    yield removeAllToDos();
                    break;
                case 'Exit':
                    console.log(colors.green('\nThank you for using ToDo CLI! 🌟\n'));
                    process.exit(0);
            }
        }
    });
}
main();
//# sourceMappingURL=index.js.map