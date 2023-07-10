import mongoose from "mongoose";
export async function connect() {

    try {
        mongoose.connect('mongodb+srv://prabhjot:prabhjot@cluster0.8i7tiwm.mongodb.net/');
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("Connected to database");
        });
        connection.on("error", (error) => {
            console.log("Error connecting to database");
            console.log(error);
        });
    } catch (error) {
        console.log("Error connecting to database")
        console.log(error);
    }
}