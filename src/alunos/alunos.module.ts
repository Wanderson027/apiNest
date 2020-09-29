import { Module } from '@nestjs/common';
import { AlunosController } from './alunos.controller';
import { AlunoService } from './shared/aluno.service';

@Module({
  controllers: [AlunosController],
  providers: [AlunoService]
})
export class AlunosModule {}
