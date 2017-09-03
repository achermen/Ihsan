import { Injectable } from '@angular/core';
import {LogementModel} from './logementModel';

@Injectable()
export class LogementService {
  

  constructor() { }

  logementBeneficaire: LogementModel;
 
  getLogementBeneficiaireByNumeroDossier(numeroDossier){
   this.logementBeneficaire={
   	  typeLogement: "test typeLogement",
      montant: 4,
      nombreChambre:5,
      eclairage:"eclairage test",
      eauPotable:"eauPotable test"}
    return this. logementBeneficaire;
   }  
  }
