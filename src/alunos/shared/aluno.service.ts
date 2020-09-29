import { Injectable } from '@nestjs/common';
import { Aluno} from './aluno';
import { InjectModel} from '@nestjs/mongoose'
import { Model} from 'mongoose'

@Injectable()
export class AlunoService {
 

constructor(@InjectModel('Aluno') private readonly alunoModel: Model<Aluno>) {}

   async getAll(){
      return await this.alunoModel.find().exec();
   }

   async getById(id: string){
      return await this.alunoModel.findById(id).exec();
   }

   async create(aluno: Aluno){
      const createdAluno = new this.alunoModel(aluno);
      return await createdAluno.save();
   }

   async update(id: string, aluno: Aluno){
      await this.alunoModel.updateOne({_id: id}, aluno).exec();
      return this.getById(id);
   }

   async delete(id: string){
      return await this.alunoModel.deleteOne({_id:id}).exec();
   }

    
}
