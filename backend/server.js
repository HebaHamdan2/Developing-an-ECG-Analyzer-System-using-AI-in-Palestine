// Import environment variables from a .env file into process.env
import 'dotenv/config';
// Import express framework
import express from 'express';

// Import the function to initialize the application routes
import { initApp } from './src/module/app.router.js';

import path from "path";
// Create an instance of the express
const app = express();

const __dirname=path.resolve();
// Initialize the application with routes and middleware

initApp(app, express);
app.use(express.static(path.join(__dirname,"/frontend/build")))
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});
// Define the port on which the server will run, default to 3000 if not specified in environment variables

const PORT = process.env.PORT || 8000;
// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
