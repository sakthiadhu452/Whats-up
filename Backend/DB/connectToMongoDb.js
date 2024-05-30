import mongoose, { mongo } from "mongoose"

const connectToMongodb = async ()=>{
    try{
        // console.log(process.env.MONGO_URL)
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to mongodb")
    }
    catch(err){
        console.log(err);
    }
}

export default connectToMongodb;