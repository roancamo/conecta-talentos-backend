import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { Empresa } from 'src/model/empresa';
import { response } from 'express';
@Controller('empresas')
export class EmpresasController {
    constructor( private readonly servicio:EmpresasService){ }
    @Get()
    obtenerEmpresas(@Res() response):Empresa[]{
        let empresas= this.servicio.obtenerEmpresas();
        if(empresas.length > 0){
            return response.status(200).send(empresas);
        }else{
            return response.status(404).send('No existen empresas');
        }
    }

    @Get(':id')
    obtenerEmpresa(@Param('id') id:number, @Res() response):Empresa{
        let empresaEncontrada= this.servicio.obtenerEmpresa(id);
        if(empresaEncontrada){
                return response.status(200).send(empresaEncontrada);
        }else{
                return response.status(404).send('No existe empresa');
        }
    }

    @Post()
    creaNuevaEmpresa(@Body() empresa:Empresa, @Res() response):void{
        let creaEmpresa= this.servicio.creaNuevaEmpresa(empresa);
        if(creaEmpresa){
            return response.status(200).send('Empresa Creada');
        }else{
            return response.status(500).send('Error al Crear Empresa');
        }
    }

    @Delete(':id')
    eliminaEmpresa(@Param('id') id:number, @Res() response):void{
        let eliminado= this.servicio.eliminaEmpresa(id);
        if(eliminado){
            return response.status(200).send('Empresa eliminada');
        }else{
            return response.status(404).send('empresa no existe');
        }
    }
}
