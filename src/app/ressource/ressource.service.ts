import { Injectable } from '@angular/core';
import {RessourceModel} from './ressourceModel'
@Injectable()
export class RessourceService {
  constructor() { }
  ressourceBeneficaire: RessourceModel;
  getRessourceBeneficaireByNumeroDossier(numeroDossier){
  	this.ressourceBeneficaire={
     typeRessource: "locataire",
     montant: 530,
     descriptionRessource: "salarie"};
  	 return this.ressourceBeneficaire;
  }

}
