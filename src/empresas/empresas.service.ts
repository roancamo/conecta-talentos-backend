import { Injectable } from '@nestjs/common';
import { Empresa } from 'src/model/empresa';

@Injectable()
export class EmpresasService {

    private empresas: Empresa[] = [];
    private tipoEmpresas: string[] = ['pequeña', 'mediana', 'grande'];
    obtenerEmpresas(): Empresa[] {
        return this.empresas;
    }

    obtenerEmpresa(id:number):Empresa{
        for (let i: number = 0; i < this.empresas.length; i++) {
            if (this.empresas[i].id == id) {
                return this.empresas[i];
            }
        }
    }
    validaEmpresa(nombre: string):boolean{
        let existeEmpresa=this.empresas.find(n => n.nombre.toLowerCase().trim() === nombre.toLowerCase().trim());
        if(existeEmpresa){
            return true;
        }
        return false;

    }
    creaNuevaEmpresa(empresa: Empresa): boolean {
        let existeEmpresa =this.validaEmpresa(empresa.nombre);
        if (!existeEmpresa) {
            if (this.validaTipoEmpresa(empresa.tipo)) {
                empresa.id =  this.obtIdDisponible();
                this.empresas.push(empresa);
                return true;
            }
          }
          return false;
    }

    obtIdDisponible():number{
                 let indiceBd:number= this.empresas.length;
                 let indice:number = 1;
                 if(indiceBd >= 1){
                    indice = this.empresas[indiceBd -1].id + 1;
                }
                return indice;
        
    }


    validaTipoEmpresa(tipo: string): boolean {

        for (let i: number = 0; i < this.tipoEmpresas.length; i++) {
            if (this.tipoEmpresas[i].toLowerCase().trim() == tipo.toLowerCase().trim()) {
                return true
            }
        }
        return false;
    }

    eliminaEmpresa(id:number):boolean{
        for (let i: number = 0; i < this.empresas.length; i++) {
            if (this.empresas[i].id == id) {
                    this.empresas.splice(i  , 1);
                    return true;
            }
        }  
        return false;      
    }
}
