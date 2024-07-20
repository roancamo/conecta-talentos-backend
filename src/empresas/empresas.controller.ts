import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { Empresa } from 'src/model/empresa';

@Controller('empresas')
export class EmpresasController {
    constructor( private readonly servicio:EmpresasService){ }
    @Get()
    obtenerEmpresas():Empresa[]{
        return this.servicio.obtenerEmpresas();
    }
    @Get(':id')
    obtenerEmpresa(@Param('id') id:number):Empresa{
        return this.servicio.obtenerEmpresa(id);
    }
    @Post()
    creaNuevaEmpresa(@Body() empresa:Empresa):void{
        return this.servicio.creaNuevaEmpresa(empresa);
    }
    @Delete(':id')
    eliminaEmpresa(@Param('id') id:number):void{
        return this.servicio.eliminaEmpresa(id);
    }
}
