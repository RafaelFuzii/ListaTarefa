import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: String, 
    peso: String,
    senha: String,
    email: String
}, { timestamps: true });

export default model("User", userSchema)