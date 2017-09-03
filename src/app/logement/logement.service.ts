import { Injectable } from '@angular/core';
import {LogementModel} from './logementModel';

@Injectable()
export class LogementService {
  

  constructor() { }

  logementBeneficaire: LogementModel;
 
  getLogementBeneficiaireByNumeroDossier(numeroDossier){
   this.logementBeneficaire={
   	  typeLogement: "1",
      montant: 540,
      nombreChambre:5,
      eclairage:"0",
      eauPotable:"1",
      autreBesoin:"pas de fenetres"};
    return this. logementBeneficaire;
   }  
  }
