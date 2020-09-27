import { Test, TestingModule } from '@nestjs/testing';
import { GatosService } from './gatos.service';

describe('GatosService', () => {
  let service: GatosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GatosService],
    }).compile();

    service = module.get<GatosService>(GatosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
