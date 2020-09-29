import { Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { Aluno} from './aluno';

@Injectable()
export class AlunoService {
 alunos: Aluno[]= [
     {id:1, nome:'wanderosn', matricula:12333, semestre:1},
     {id:2, nome:'Juarez', matricula:12355, semestre:2},
     {id:3, nome:'Sebastiao', matricula:12355, semestre:3},
     {id:4, nome:'Ludogero', matricula:123466, semestre:4},
     {id:5, nome:'Wemerson', matricula:123477, semestre:5},
     {id:6, nome:'Luanda', matricula:12388, semestre:6},
     {id:7, nome:'Totorez', matricula:12399, semestre:7}
 ];
   getAll(){
    return this.alunos;
   }

   getById(id: number){
    const aluno = this.alunos.find((value)=>value.id==id);
    return aluno;
   }

   create(aluno: Aluno){
      let lastId = 0;
      if(this.alunos.length > 0){
        lastId = this.alunos[this.alunos.length-1].id;
      }

      aluno.id = lastId+1;
      this.alunos.push(aluno);

      return aluno;
   }

   update(aluno: Aluno){
      const alunoArray = this.getById(aluno.id);
      if(alunoArray){
        alunoArray.matricula = aluno.matricula;
        alunoArray.nome = aluno.nome;
        alunoArray.semestre = aluno.semestre;
      }
      return alunoArray;
   }

   delete(id: number){
      const index = this.alunos.findIndex((value)=> value.id==id);
      this.alunos.splice(index, 1);
   }

    
}
