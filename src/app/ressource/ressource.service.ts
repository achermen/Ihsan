import { Injectable } from '@angular/core';
import {RessourceModel} from './ressourceModel'
@Injectable()
export class RessourceService {
  constructor() { }
  ressourceBeneficaire: RessourceModel;
  getRessourceBeneficaireByNumeroDossier(numeroDossier){
  	this.ressourceBeneficaire={
     typeRessource: "1",
     montantRessource: 4000,
     descriptionRessource: "salarie chez Klee group"};
  	 return this.ressourceBeneficaire;
  }
}
