import 'dotenv/config';
import express from 'express';
import { initApp } from './src/module/app.router.js';
const app = express();
const PORT = process.env.PORT || 6000;

initApp(app, express);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
