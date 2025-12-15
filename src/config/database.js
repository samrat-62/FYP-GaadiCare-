import mongoose from "mongoose";
import config from "./config.js";

async function connectionDB() {
    try{
        await mongoose.connect(config.mongodbUrl);
        console.log("MongoDB connected successfully.")
    }
    catch(error){
        console.log(error);
    }
}

export default connectionDB;