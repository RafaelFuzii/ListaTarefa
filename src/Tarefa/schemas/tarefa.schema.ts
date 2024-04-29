import { Schema, model } from 'mongoose'

const tarefaSchema = new Schema({
    titulo: String, 
    descricao: String,
    data_criacao: Date,
    data_conclusao: Date,
    tipo: String,
    categoria: String,
    status: String,
    user: String,

}, { timestamps: true });

export default model("Tarefa", tarefaSchema)