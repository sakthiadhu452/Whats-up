import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Backend/Routes/authroute.js";
import connectToMongodb from "./Backend/DB/connectToMongoDb.js";
import cookieParser from "cookie-parser";
import messageRoutes from './Backend/Routes/message.routes.js';
import userRoutes from './Backend/Routes/user.routes.js';
import videoRoutes from './Backend/Routes/videoRoutes.js'
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
app.use('/api/videocall',videoRoutes);


// Serve static files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});


// Start server and connect to MongoDB
server.listen(port, () => {
    connectToMongodb();
    console.log(`App is running on ${port}`);
});
