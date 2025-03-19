import mongoose from "mongoose";



export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pramananda:2002@cluster0.hnans.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log("Db connected"))
}