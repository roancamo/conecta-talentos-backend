import { Body, Controller, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { PostulacionesService } from './postulaciones.service';
import { EstudiantesService } from 'src/estudiantes/estudiantes.service';
import { OfertasLaboralesService } from 'src/ofertas-laborales/ofertas-laborales.service';
import { Postulacion } from 'src/model/postulacion';

@Controller('postulaciones')
export class PostulacionesController {
    constructor( private readonly servicioPostulacion:PostulacionesService,
        private readonly servicioEstudiante: EstudiantesService,
        private readonly servicioOfereta: OfertasLaboralesService
    ){ }

    @Post()
    creaPostulacion(@Body() postulacion:Postulacion, @Res() response){
        let existePostulante= this.servicioEstudiante.existeEstudiante(postulacion.estudiante.email);
        if(existePostulante){
            postulacion.estado = 'pendiente'; 
            let creaPostulacion = this.servicioPostulacion.creaPostulacion(postulacion);
            
            if(creaPostulacion){
                
                 let agregaPostulacion = this.servicioOfereta.agregarPostulacion(postulacion);
                 if(agregaPostulacion){
                    return response.status(200).send('Postulacion Creada y asociada a Oferta');
                }
                 else{
                 return response.status(200).send('Postulacion Creada');
                }
            }else{
                return response.status(500).send('Error al crear postulacion');
            }
        }else{
            return response.status(404).send('Estudiante no existe');
        }
        
    }

}
