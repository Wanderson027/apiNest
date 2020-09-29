import { Test, TestingModule } from '@nestjs/testing';
import { AlunoService } from './aluno.service';

describe('AlunoService', () => {
  let provider: AlunoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlunoService],
    }).compile();

    provider = module.get<AlunoService>(AlunoService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
