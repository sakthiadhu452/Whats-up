import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Backend/Routes/authroute.js";
import connectToMongodb from "./Backend/DB/connectToMongoDb.js";
import cookieParser from "cookie-parser";
import messageRoutes from './Backend/Routes/message.routes.js';
import userRoutes from './Backend/Routes/user.routes.js';
import { app, server } from "./Backend/socket/socket.js";
import path from 'path';
import { lstatSync, readdirSync } from 'fs';

// Load environment variables
dotenv.config();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// Serve static files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

// Function to check if a file is a directory
function isDirectory(source) {
    return lstatSync(source).isDirectory();
}

// Function to get directories in the current directory
function getDirectories(source) {
    return readdirSync(source)
        .map(name => path.join(source, name))
        .filter(isDirectory);
}

// Get the current directory
const currentDir = process.cwd();

// Get directories in the current directory
const directories = getDirectories(currentDir+"/Frontend");

// Print the directories
console.log('Directories in the current directory:');
directories.forEach(dir => {
    console.log(dir);
});

// Start server and connect to MongoDB
server.listen(port, () => {
    connectToMongodb();
    console.log(`App is running on ${port}`);
});
