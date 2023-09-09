import mongoose from "mongoose";

mongoose.connect("mongodb+srv://tarcisi0neto:Tarc280897@cluster0.noyuhny.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;