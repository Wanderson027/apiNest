import { Injectable } from '@nestjs/common';
import { Professor } from './professor';

@Injectable()
export class ProfessorService {
    professores: Professor[]= [
        {id:1, nome:'wanderosn', matricula:12333, telefone:1, email:'wanderson.silva@gmail.com'},
        {id:2, nome:'Juarez', matricula:12333, telefone:1, email:'juarez.silva@gmail.com'},
        {id:3, nome:'Sebastiao', matricula:12333, telefone:1, email:'Sebastiao.silva@gmail.com'},
        {id:4, nome:'Willia', matricula:12333, telefone:1, email:'Willia.silva@gmail.com'},
        {id:5, nome:'Ana carolina', matricula:12333, telefone:1, email:'ana.silva@gmail.com'},
        {id:6, nome:'Juan', matricula:12333, telefone:1, email:'Juan.silva@gmail.com'},
        {id:7, nome:'anderson', matricula:12333, telefone:1, email:'anderson.silva@gmail.com'},
    ];
      getAll(){
        return this.professores;
      }
   
      getById(id: number){
          const professor = this.professores.find((value)=>value.id==id);
          return professor;
      }
   
      create(professor: Professor){
          let lastId = 0;
          if(this.professores.length > 0){
          lastId = this.professores[this.professores.length-1].id;
      }

          professor.id = lastId+1;
          this.professores.push(professor);

          return professor;
      }
   
      update(professor: Professor){
        const professorArray = this.getById(professor.id);

        if(professorArray){
          professorArray.matricula = professor.matricula;
          professorArray.nome = professor.nome;
          professorArray.email = professor.email;
          professorArray.telefone = professor.telefone;
      }
      return professorArray;
      }
   
      delete(id: number){
        const index = this.professores.findIndex((value)=> value.id==id);
        this.professores.splice(index, 1);
      }
   
}
