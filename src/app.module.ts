import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { EstudiantesService } from './estudiantes/estudiantes.service';
import { EmpresasService } from './empresas/empresas.service';
import { EmpresasController } from './empresas/empresas.controller';
import { OfertasLaboralesController } from './ofertas-laborales/ofertas-laborales.controller';
import { OfertasLaboralesService } from './ofertas-laborales/ofertas-laborales.service';
@Module({
  imports: [],
  controllers: [AppController,EstudiantesController, EmpresasController,OfertasLaboralesController],
  providers: [AppService, EstudiantesService, EmpresasService,OfertasLaboralesService ],
})
export class AppModule {}
