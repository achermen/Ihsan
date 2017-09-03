import { Injectable } from '@angular/core';
import {SantesModel} from './santesModel';
@Injectable()
export class SanteService {
  santeBeneficaire: SantesModel;
  constructor() { }

  getSanteBeneficaireByNumeroDossier(numeroDossier){
  	 
    this.santeBeneficaire={
  	aUnHandicap:"non",
	  aUneMaladieChronique:"non",
    descriptionHandicap : "oui",
    descriptionMaladieChronique: "tension"   
  	};
    return this.santeBeneficaire;
  }
  	 

}
