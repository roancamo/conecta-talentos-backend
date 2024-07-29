import { Injectable } from '@nestjs/common';
import { Estudiante } from 'src/model/estudiante';
@Injectable()
export class EstudiantesService {
    private estudiantes: Estudiante[] = [];
    obtenerEstudiantes(): Estudiante[] {
        return this.estudiantes;
    }

    creaEstudiante(estudiante: Estudiante): boolean {
       let existe= this.existeEstudiante(estudiante.email);
        if (!existe) {
            estudiante.id =  this.obtIdDisponible();
            this.estudiantes.push(estudiante);
            return true;
        }
        return false;
    }
    existeEstudiante(email:string):boolean{
        let existeMail=this.estudiantes.find(n => n.email.toLowerCase().trim() === email.toLowerCase().trim());
        if(existeMail){
            return true;
        }
        return false;
    }
    obtIdDisponible():number{
        let indiceBd:number= this.estudiantes.length;
        let indice:number = 1;
        if(indiceBd >= 1){
           indice = this.estudiantes[indiceBd -1].id + 1;
       }
       return indice;

}
    obtenerEstudiante(id:number):Estudiante{
        for(let i:number=0;i<this.estudiantes.length;i++)
        {
            if(this.estudiantes[i].id == id){
                return this.estudiantes[i];
            }
        }
    }


    eliminarEstudiante(id: number): boolean {
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].id == id) {
                this.estudiantes.splice(i , 1);
                return true
            }
        }
        return false;

    }
}
