import { Injectable } from '@nestjs/common';
import { Turma } from './turma';
import { InjectModel} from '@nestjs/mongoose'
import { Model} from  'mongoose';

@Injectable()
export class TurmaService {
   
  constructor(@InjectModel('Turma') private readonly turmaModel: Model<Turma>) {}

  async getAll(){
     return await this.turmaModel.find().exec();
  }

  async getById(id: string){
     return await this.turmaModel.findById(id).exec();
  }

  async create(turma: Turma){
     const createdTurma = new this.turmaModel(turma);
     return await createdTurma.save();
  }

  async update(id: string, turma: Turma){
     await this.turmaModel.updateOne({_id: id}, turma).exec();
     return this.getById(id);
  }

  async delete(id: string){
     return await this.turmaModel.deleteOne({_id:id}).exec();
  }
}
