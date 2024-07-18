import { Injectable } from '@nestjs/common';
import { Postulacion } from 'src/model/postulacion'; 
@Injectable()
export class PostulacionesService {

    private postulaciones :Postulacion[] = [];
}
