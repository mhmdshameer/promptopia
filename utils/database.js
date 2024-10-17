import mongoose from "mongoose";

let isConnected = false; //track the connection

export const ConnectToDB = async () => {
    mongoose.set('strictQuery', true);
    
    if(isConnected){
        console.log('mongoDB is already connected');
        return
    }

    try {
        await mongoose.connect(process.env.MONGOOSE_URI,{
            dbName:'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true
        console.log("MongoDB Connected")
    } catch (error) {
        console.log(error)
    }
}