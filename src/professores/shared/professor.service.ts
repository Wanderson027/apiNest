import { Injectable } from '@nestjs/common';
import { Professor } from './professor';
import { InjectModel} from '@nestjs/mongoose'
import { Model} from  'mongoose';

@Injectable()
export class ProfessorService {

  constructor(@InjectModel('Professor') private readonly professorModel: Model<Professor>) {}

  async getAll(){
     return await this.professorModel.find().exec();
  }

  async getById(id: string){
     return await this.professorModel.findById(id).exec();
  }

  async create(professor: Professor){
    const createdProfessor = new this.professorModel(professor);
    return await createdProfessor.save();
 }

  async update(id: string, professor: Professor){
     await this.professorModel.updateOne({_id: id}, professor).exec();
     return this.getById(id);
  }

  async delete(id: string){
     return await this.professorModel.deleteOne({_id:id}).exec();
  }

   
}
