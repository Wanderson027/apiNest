import {Document} from 'mongoose'

export class Aluno extends Document {
    // id:number;
    nome:string;
    matricula:number;
    semestre:number;
}
