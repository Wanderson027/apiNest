import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { AlunosController } from './alunos.controller';
import { AlunoService } from './shared/aluno.service';
import {AlunoSchema} from '../schemas/aluno.schema'


@Module({
  imports:[
     MongooseModule.forFeature([{ name:'Aluno', schema:AlunoSchema}])
  ],
  controllers: [AlunosController],
  providers: [AlunoService]
})
export class AlunosModule {}
