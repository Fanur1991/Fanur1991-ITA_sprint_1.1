"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const toDoControllers_1 = require("../controllers/toDoControllers");
const router = (0, express_1.Router)();
router.get('/todos', toDoControllers_1.getToDosList);
router.post('/todo', toDoControllers_1.createToDo);
router.put('/todos/update/:id', toDoControllers_1.updateToDo);
router.patch('/todos/update/:id', toDoControllers_1.updateToDoState);
router.delete('/todos/remove/:id', toDoControllers_1.removeToDo);
router.delete('/todos/remove-all', toDoControllers_1.removeToDos);
exports.default = router;
//# sourceMappingURL=toDoRoutes.js.map