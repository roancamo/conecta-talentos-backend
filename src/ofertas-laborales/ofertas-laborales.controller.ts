import { Body, Controller, Delete, Get, Param, Post, Query, Res } from '@nestjs/common';
import { OfertasLaboralesService } from './ofertas-laborales.service';
import { EmpresasService } from 'src/empresas/empresas.service';
import { OfertaLaboral } from 'src/model/ofertaLaboral';
import { response } from 'express';
@Controller('ofertas-laborales')
export class OfertasLaboralesController {

    constructor(
            private readonly servicioOferta:OfertasLaboralesService,
            private readonly servicioEmpresa:EmpresasService
    ){ }


    @Post() 
   creaOferta(@Body() oferta:OfertaLaboral, @Res() response):void{
    let existeEmpresa= this.servicioEmpresa.validaEmpresa(oferta.empresa.nombre);
    if(existeEmpresa){
                let ofertaCreada= this.servicioOferta.creaOferta(oferta);
                if(ofertaCreada){
                            return response.status(200).send('Oferta Creada');
                }
                else{
                    return response.status(500).send('Error al crear oferta' );
                }
            
    }else{
            return response.status(404).send('No existe empresa');
    }
    
   }
   @Get('/publicadas')
   obtieneOfertas(@Query('empresa') empresa:string, @Query('estado') estado:string, @Res() response):OfertaLaboral[]{
    let ofertasEncontrada= this.servicioOferta.obtieneOfertas(empresa,estado);
    if(ofertasEncontrada.length > 0){
            return response.status(200).send(ofertasEncontrada);
    }else{
            return response.status(404).send('No existen ofertas para empresa: ' + empresa);
    }
   }
 
   @Get(':id')
   obtieneOferta(@Param('id') id:number, @Res() response):OfertaLaboral{
       let ofertaEncontrada= this.servicioOferta.obtieneOferta(id);
       if(ofertaEncontrada){
               return response.status(200).send(ofertaEncontrada);
       }else{
               return response.status(404).send('No existe oferta');
       }
   }
 

   @Delete(':id')
   eliminaOferta(@Param('id') id:number, @Res() response):void{
    let eliminado= this.servicioOferta.eliminaOferta(id);
    if(eliminado){
        return response.status(200).send('Oferta eliminada');
    }else{
        return response.status(404).send('oferta no existe');
    }
   }
}
