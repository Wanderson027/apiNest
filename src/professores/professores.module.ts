import { Module } from '@nestjs/common';
import { ProfessoresController } from './professores.controller';
import { ProfessorService } from './shared/professor.service';

@Module({
  controllers: [ProfessoresController],
  providers: [ProfessorService]
})
export class ProfessoresModule {}
