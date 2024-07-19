import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { Estudiante } from 'src/model/estudiante';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {
    constructor( private readonly servicio:EstudiantesService){ }
    @Get()
    obtenerEstudiantes():Estudiante[]{
        return this.servicio.obtenerEstudiantes();

    }
    @Post()
    creaEstudiante( @Body() estudiante:Estudiante ):void{
        this.servicio.creaEstudiante(estudiante);
    }
    @Get(":id")
    obtenerEstudiante(@Param("id") id:number):Estudiante{
        return this.servicio.obtenerEstudiante(id);

    }
    @Delete(":id")
    eliminarEstudiante(@Param("id") id:number):void{
        return this.servicio.eliminarEstudiante(id);

    }

   /* Registrar un nuevo estudiante (Verificar si existe el estudiante según el correo ingresado)
Obtener un estudiante según su id
Obtener todos los estudiantes
Eliminar un estudiante según su id*/

   
}   
