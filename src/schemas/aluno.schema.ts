import * as mongoose from 'mongoose';

export const AlunoSchema = new mongoose.Schema({
    nome:String,
    matricula:Number,
    semestre:Number
})