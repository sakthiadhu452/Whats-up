import express from "express"
import dotenv from "dotenv"
import authRoutes from "./Backend/Routes/authroute.js"
import connectToMongodb from "./Backend/DB/connectToMongoDb.js";
import cookieParser from "cookie-parser";
import messagRoutes from './Backend/Routes/message.routes.js'
import userRoutes from './Backend/Routes/user.routes.js'
import { app,server } from "./Backend/socket/socket.js";
import path from 'path'


dotenv.config();
const port =process.env.PORT || 4000;

const __dirname=path.resolve();
app.use(express.json());
app.use(cookieParser());



app.use('/api/auth',authRoutes);
app.use('/api/messages',messagRoutes);
app.use('/api/users',userRoutes)
app.use(express.static(path.join(__dirname,"/Frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"Whats-up","Frontend","dist","index.html"))
})



server.listen(port,()=>{
    connectToMongodb();
    console.log(`app is running on ${port}`)
})