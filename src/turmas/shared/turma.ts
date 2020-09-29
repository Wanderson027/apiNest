
import { Document} from 'mongoose'; 


export class Turma extends Document{
    // id: number;
    codigo:number;
    lider:string;
    email:string;
}
