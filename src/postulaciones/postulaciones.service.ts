import { Injectable } from '@nestjs/common';
import { Postulacion } from 'src/model/postulacion';

@Injectable()
export class PostulacionesService {

    private postulaciones :Postulacion[] = [];

    creaPostulacion(postulacion: Postulacion):boolean{
        postulacion.id= this.obtIdDisponible();
        this.postulaciones.push(postulacion);
        return true;
    } 

    obtIdDisponible():number{
        let indiceBd:number= this.postulaciones.length;
        let indice:number = 1;
        if(indiceBd >= 1){
           indice = this.postulaciones[indiceBd -1].id + 1;
       }
       return indice;
    }

}
