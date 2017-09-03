import { Injectable } from '@angular/core';
import {CoordonneeModel} from "./coordonneeModel";

@Injectable()
export class CoordonneService {

  constructor() { }
  coordonneeBeneficaire:CoordonneeModel;

  getCoordonneeBeneficaireByNumeroDossier(numeroDossier){
    this.coordonneeBeneficaire={
    numeroDossier : "1",
    cin:  "04815383" ,
    nom:  "BAKIR",
    prenom:  "Achraf",
    telephone:  "06 32 35 29 16",
    adresse: "Velizy" ,
    niveauD_etude: "Master",
    profession:  "Ingenieur",
    nombreMembreFamille:  6,
    ville :  "Oualegh",
    etatDossier :  "Actif",   
    etatCivil : "Celibataire"  
    }
    return this.coordonneeBeneficaire;
  }

}
