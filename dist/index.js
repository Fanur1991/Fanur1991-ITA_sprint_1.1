"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // ESmodule
// const express = require('express') -> commonJS
const toDoRoutes_1 = __importDefault(require("./routes/toDoRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = 3001;
app.use('/api', toDoRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
//# sourceMappingURL=index.js.map