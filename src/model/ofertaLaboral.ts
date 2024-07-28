import { Empresa } from "./empresa"; 
import { Postulacion } from "./postulacion";
export class OfertaLaboral{
    constructor(
        public id:number,
        public fechaCreacion: string,
        public descripcion: string,
        public cargo: string,
        public region: string,
        public tipo : string,/*(Remoto , Presencial o Hibrido)*/
        public estado: string, /* (abierta / Cerrada)*/
        public empresa: Empresa,
        public postulaciones: Postulacion[]

    ){

    }
}