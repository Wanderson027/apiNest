import { Injectable } from '@nestjs/common';
import { Turma } from './turma';

@Injectable()
export class TurmaService {
    turmas: Turma[]= [
        {id:1, codigo:1234, lider:'Wanderson', email:'w.silva@gmail.com'},
        {id:2, codigo:1235, lider:'juan', email:'juan.silva@gmail.com'},
        {id:3, codigo:1236, lider:'sebastiao', email:'sebastiao.silva@gmail.com'},
        {id:4, codigo:1237, lider:'ana', email:'ana.silva@gmail.com'},
        {id:5, codigo:1238, lider:'jadilson', email:'jadilson.silva@gmail.com'},
        {id:6, codigo:1239, lider:'felipe', email:'felipe.silva@gmail.com'},
        {id:7, codigo:1231, lider:'jose', email:'jose.silva@gmail.com'},
        
    ];
      getAll(){
        return this.turmas;
      }
   
      getById(id: number){
        const turma = this.turmas.find((value)=>value.id==id);
        return turma;
      }
   
      create(turma: Turma){
        let lastId = 0;
      if(this.turmas.length > 0){
        lastId = this.turmas[this.turmas.length-1].id;
      }
      turma.id = lastId+1;
      this.turmas.push(turma);
      return turma;
      }
   
      update(turma: Turma){
        const turmaArray = this.getById(turma.id);
      if(turmaArray){
        turmaArray.codigo = turma.codigo;
        turmaArray.email = turma.email;
        turmaArray.lider = turma.lider;
        
      }
      return turmaArray;
      }
   
      delete(id: number){
        const index = this.turmas.findIndex((value)=> value.id==id);
        this.turmas.splice(index, 1);
      }
}
