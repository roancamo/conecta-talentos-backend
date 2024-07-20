import { Injectable } from '@nestjs/common';
import { Estudiante } from 'src/model/estudiante';
@Injectable()
export class EstudiantesService {
    private estudiantes: Estudiante[] = [];
    obtenerEstudiantes(): Estudiante[] {

        return this.estudiantes;

    }
    creaEstudiante(estudiante: Estudiante): void {

        if (!this.validarExisteMail(estudiante.email)) {


            estudiante.id = this.estudiantes.length + 1;
            this.estudiantes.push(estudiante);
            //console.log( this.estudiantes);
        }
        else {
            console.log('ya existe');
        }
    }
    obtenerEstudiante(id: number): Estudiante {

        for (let i: number = 0; i <= this.estudiantes.length; i++) {
            if (this.estudiantes[i].id == id) {
                return this.estudiantes[i];
            }
        }
        return null;

    }


    eliminarEstudiante(id: number): void {



        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].id == id) {
                this.estudiantes.splice(i , 1);
            }
        }

    }

    validarExisteMail(email: string): boolean {

        if (this.estudiantes.length == 0) {
            return false;
        }
        else {

            for (let i: number = 0; i < this.estudiantes.length; i++) {

                if (this.estudiantes[i].email == email.toLocaleLowerCase().trim()) {
                    return true;
                }

            }

        }

        return false;
    }
    //Registrar un nuevo estudiante (Verificar si existe el estudiante según el correo ingresado)

}
