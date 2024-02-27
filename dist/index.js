import express from 'express'; // ESmodule
// const express = require('express') -> commonJS
import toDoRoutes from './routes/toDoRoutes.js';
const app = express();
app.use(express.json());
const PORT = 3000;
app.use('/api', toDoRoutes);
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
//# sourceMappingURL=index.js.map