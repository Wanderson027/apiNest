import * as mongoose from 'mongoose';

export const TurmaSchema = new mongoose.Schema({
    codigo:Number,
    lider:String,
    email:String,
})