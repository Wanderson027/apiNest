import { Module } from '@nestjs/common';
import { TurmasController } from './turmas.controller';
import { TurmaService } from './shared/turma.service';

@Module({
  controllers: [TurmasController],
  providers: [TurmaService]
})
export class TurmasModule {}
