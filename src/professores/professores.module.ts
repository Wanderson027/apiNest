import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { ProfessoresController } from './professores.controller';
import { ProfessorService } from './shared/professor.service';
import { ProfessorSchema} from '../schemas/professor.schema'


@Module({
  imports:[
     MongooseModule.forFeature([{ name:'Professor', schema:ProfessorSchema}])
  ],
  controllers: [ProfessoresController],
  providers: [ProfessorService]
})
export class ProfessoresModule {}
