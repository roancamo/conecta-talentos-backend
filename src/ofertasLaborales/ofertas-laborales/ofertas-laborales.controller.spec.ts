import { Test, TestingModule } from '@nestjs/testing';
import { OfertasLaboralesController } from './ofertas-laborales.controller';

describe('OfertasLaboralesController', () => {
  let controller: OfertasLaboralesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfertasLaboralesController],
    }).compile();

    controller = module.get<OfertasLaboralesController>(OfertasLaboralesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
