import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose'
import { TurmasController } from './turmas.controller';
import { TurmaService } from './shared/turma.service';
import { TurmaSchema} from '../schemas/turma.schema';


@Module({
  imports:[
     MongooseModule.forFeature([{ name:'Turma', schema:TurmaSchema}])
  ],
  controllers: [TurmasController],
  providers: [TurmaService]
})
export class TurmasModule {}
