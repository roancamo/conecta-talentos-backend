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
    creaNuevaEmpresa(empresa: Empresa): void {
        if (!this.validaEmpresa(empresa.nombre)) {
            if (this.validaTipoEmpresa(empresa.tipo)) {

                empresa.id = this.empresas.length + 1;
                this.empresas.push(empresa);
            }
            else{
                console.log('tipo empresa invalido');
            }

        }
    }

    validaEmpresa(nombre: string): boolean {
        if (this.empresas.length > 0) {
            for (let i: number = 0; i < this.empresas.length; i++) {
                if (this.empresas[i].nombre.toLowerCase().trim() == nombre.toLowerCase().trim()) {
                    return true;
                }

            }
        }

        return false;
    }

    validaTipoEmpresa(tipo: string): boolean {

        for (let i: number = 0; i < this.tipoEmpresas.length; i++) {
            if (this.tipoEmpresas[i].toLowerCase().trim() == tipo.toLowerCase().trim()) {
                return true
            }

        }


        return false;
    }
    eliminaEmpresa(id:number):void{
        for (let i: number = 0; i < this.empresas.length; i++) {
            if (this.empresas[i].id == id) {
                 //this.empresas.splice(i-1,1);
                    this.empresas.splice(i  , 1);
            }

        }        
    }
}
