import { Injectable } from '@nestjs/common';
import { OfertaLaboral } from 'src/model/ofertaLaboral';

@Injectable()
export class OfertasLaboralesService {

    private ofertasLaborales :OfertaLaboral[] = [];
}

