import { Injectable } from '@angular/core';
import { CoordonneeModel } from "./coordonneeModel";

@Injectable()
export class CoordonneService {

  constructor() { }
  coordonneeBeneficaire: CoordonneeModel;

  getCoordonneeBeneficaireByNumeroDossier(numeroDossier) {
    this.coordonneeBeneficaire = {
      etatDossier: '0',
      etatCivil: '0',
      numeroDossier: '1',
      cin: '04877355',
      nom: 'BAKIR',
      prenom: 'Achraf',
      telephone: '06 32 35 29 16',
      adresse: 'Velizy',
      niveauD_etude: 'Master',
      profession: 'Ingenieur',
      nombreMembreFamille: 6,
      ville: '0'
    };
    return this.coordonneeBeneficaire;
  }
}
