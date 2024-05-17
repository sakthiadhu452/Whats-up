import express from "express"
import dotenv from "dotenv"
import authRoutes from "../Backend/Routes/authroute.js"
import connectToMongodb from "./DB/connectToMongoDb.js";
import cookieParser from "cookie-parser";
import messagRoutes from './Routes/message.routes.js'
import userRoutes from './Routes/user.routes.js'



const app = express();
dotenv.config({path:"../.env"});
const port =process.env.PORT || 4000;
app.use(express.json());
app.use(cookieParser());



app.use('/api/auth',authRoutes);
app.use('/api/messages',messagRoutes);
app.use('/api/users',userRoutes)




app.listen(port,()=>{
    connectToMongodb();
    console.log(`app is running on ${port}`)
})