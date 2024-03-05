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
const inquirer_1 = __importDefault(require("inquirer"));
const colors_1 = __importDefault(require("colors"));
const cliControllers_1 = require("./cliControllers");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.clear();
        console.log(colors_1.default.cyan('Welcome to the ToDo CLI! 📝'));
        console.log(colors_1.default.cyan('---------------------------------'));
        let answer = null;
        while (answer !== 'Exit') {
            console.log(colors_1.default.yellow('\nMain Menu:'));
            answer = yield inquirer_1.default.prompt([
                {
                    type: 'list',
                    name: 'action',
                    prefix: '>',
                    message: colors_1.default.magenta('What would you like to do?'),
                    choices: [
                        { name: 'Add a new todo', value: 'To add todo' },
                        { name: 'View all todos', value: 'To get all todos' },
                        { name: 'Update a todo', value: 'To update todo' },
                        { name: 'Change todo state', value: 'To change todo state' },
                        { name: 'Delete a todo', value: 'Delete todo' },
                        { name: 'Delete all todos', value: 'Delete all todo' },
                        { name: colors_1.default.red('Exit'), value: 'Exit' },
                    ],
                    loop: false,
                },
            ]);
            switch (answer.action) {
                case 'To add todo':
                    yield (0, cliControllers_1.addToDo)();
                    break;
                case 'To get all todos':
                    yield (0, cliControllers_1.getToDos)();
                    break;
                case 'To update todo':
                    yield (0, cliControllers_1.updateToDo)();
                    break;
                case 'To change todo state':
                    yield (0, cliControllers_1.changeToDoState)();
                    break;
                case 'Delete todo':
                    yield (0, cliControllers_1.removeToDo)();
                    break;
                case 'Delete all todo':
                    yield (0, cliControllers_1.removeAllToDos)();
                    break;
                case 'Exit':
                    console.log(colors_1.default.green('\nThank you for using ToDo CLI! 🌟\n'));
                    process.exit(0);
            }
        }
    });
}
main();
//# sourceMappingURL=index.js.map