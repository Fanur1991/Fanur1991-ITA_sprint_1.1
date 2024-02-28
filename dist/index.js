import express from 'express'; // ESmodule
// const express = require('express') -> commonJS
import toDoRoutes from './routes/toDoRoutes.js';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3001;
app.use('/api', toDoRoutes);
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
//# sourceMappingURL=index.js.map
