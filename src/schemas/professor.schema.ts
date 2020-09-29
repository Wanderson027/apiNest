import * as mongoose from 'mongoose';

export const ProfessorSchema = new mongoose.Schema({
    
    nome:String,
    matricula:Number,
    telefone:Number,
    email:String
})