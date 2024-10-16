import mongoose from "mongoose";

let isConnected = false; //track the connection

export const ConnectToDB = async () => {
    mongoose.set('strictQuery', true);
    
}