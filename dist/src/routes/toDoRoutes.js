"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const toDoControllers_1 = require("../controllers/toDoControllers");
const router = (0, express_1.Router)();
router.get('/', toDoControllers_1.getToDosList);
router.post('/', toDoControllers_1.createToDo);
exports.default = router;
