import { Injectable } from '@angular/core';
import { SantesModel } from './santesModel';
@Injectable()
export class SanteService {
  santeBeneficaire: SantesModel;
  constructor() { }

  getSanteBeneficaireByNumeroDossier(numeroDossier) {

    this.santeBeneficaire = {
      aUnHandicap: '0',
      aUneMaladieChronique: '1',
      descriptionHandicap: 'pas d handicap Hmd',
      descriptionMaladieChronique: 'description test maladie'
    };
    return this.santeBeneficaire;
  }


}
