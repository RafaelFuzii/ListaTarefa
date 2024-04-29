import { Schema, model } from 'mongoose'

const categoriaSchema = new Schema({
    nome: String, 
    cor: String,

}, { timestamps: true });

export default model("Categoria", categoriaSchema)