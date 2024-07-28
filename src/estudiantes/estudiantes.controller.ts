import { Body, Controller, Post, Get, Param, Delete, Res } from '@nestjs/common';
import { Estudiante } from 'src/model/estudiante';
import { EstudiantesService } from './estudiantes.service';
import { response } from 'express';

@Controller('estudiantes')
export class EstudiantesController {
    constructor( private readonly servicio:EstudiantesService){ }
    @Get()
    obtenerEstudiantes(@Res() response):Estudiante[]{
        let estudiantes= this.servicio.obtenerEstudiantes();
        if(estudiantes.length > 0){
            return response.status(200).send(estudiantes);
        } else{
            return response.status(404).send('No existen estudiantes');
        }
    }

    @Post()
    creaEstudiante(@Body() estudiante: Estudiante,@Res() response):void{
    let creaEstudiante= this.servicio.creaEstudiante(estudiante);
    if(creaEstudiante){
        return response.status(200).send('Estudiante creado');
    }
    else{
        return response.status(500).send('Error al crear Estudiante');
    }
}
 
    @Get(':id')
    obtenerEstudiante(@Param('id') id:number , @Res() response ):Estudiante{
    let estudianteExiste= this.servicio.obtenerEstudiante(id);
    if(estudianteExiste){
        return response.status(200).send(estudianteExiste);
    }
    else{
        return response.status(404).send('Estudiante no existe');
    }
}

    @Delete(":id")
    eliminarEstudiante(@Param("id") id:number, @Res() response):void{
        let eliminado = this.servicio.eliminarEstudiante(id);
        if (eliminado){
            return response.status(200).send('Estdiante Eliminado');
        }else{
            return response.status(404).send('No existe Estudiante');
        }

    }
  
}   
