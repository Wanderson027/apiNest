import { Document} from 'mongoose'; 

export class Professor extends Document{
    // id:number;
    nome:string;
    matricula:number;
    telefone:number;
    email:string;
}
