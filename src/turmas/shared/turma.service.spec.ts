import { Test, TestingModule } from '@nestjs/testing';
import { TurmaService } from './turma.service';

describe('TurmaService', () => {
  let provider: TurmaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TurmaService],
    }).compile();

    provider = module.get<TurmaService>(TurmaService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
