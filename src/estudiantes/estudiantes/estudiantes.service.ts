import { Injectable } from '@nestjs/common';
import { Estudiante } from 'src/model/estudiante';
@Injectable()
export class EstudiantesService {
    private estudiantes:Estudiante[] = [];

}
