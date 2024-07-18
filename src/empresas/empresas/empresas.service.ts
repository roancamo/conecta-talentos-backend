import { Injectable } from '@nestjs/common';
import { Empresa } from 'src/model/empresa';

@Injectable()
export class EmpresasService {

    private empresas: Empresa[] = [];

   

}
