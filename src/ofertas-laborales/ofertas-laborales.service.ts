import { Injectable } from '@nestjs/common';
import { OfertaLaboral } from 'src/model/ofertaLaboral';
@Injectable()
export class OfertasLaboralesService {
    private ofertasLaborales :OfertaLaboral[] = [];

    creaOferta(oferta: OfertaLaboral):boolean{
        oferta.id= this.obtIdDisponible();
        this.ofertasLaborales.push(oferta);
        return true;
    } 

    obtIdDisponible():number{
        let indiceBd:number= this.ofertasLaborales.length;
        let indice:number = 1;
        if(indiceBd >= 1){
           indice = this.ofertasLaborales[indiceBd -1].id + 1;
       }
       return indice;
    }
    obtieneOferta(id:number):OfertaLaboral{
       for(let i:number =0; i< this.ofertasLaborales.length;i++){
                if (this.ofertasLaborales[i].id == id){
                    return this.ofertasLaborales[i];
                }

        }
    }
    obtieneOfertas(nombreEmpresa:string, estado:string):OfertaLaboral[]{
        let OfertasEmpresa=  this.ofertasLaborales.filter(n=> n.empresa.nombre.toLowerCase().trim() ==nombreEmpresa.toLowerCase().trim() && n.estado.toLowerCase().trim() == estado.toLowerCase().trim())
        return OfertasEmpresa;
    }
    eliminaOferta(id:number):boolean{
        for (let i: number = 0; i < this.ofertasLaborales.length; i++) {
            if (this.ofertasLaborales[i].id == id) {
                    this.ofertasLaborales.splice(i  , 1);
                    return true;
            }
        }  
        return false;      
    }

}
