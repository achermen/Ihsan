import { Injectable } from '@angular/core';
import { BeneficiaireModel } from './beneficiaire-list/beneficiaireModel';


@Injectable()
export class BeneficiaireService {
  beneficiaireServiceModel;


  listBeneficiaire: BeneficiaireModel[] = [
    new BeneficiaireModel('1', '0000001x', 'Trabelsi', 'Samia', '0632352916', ' 9 okace de europe', ' 3 ebtid2i', 'Najar', 3, 'Pas d handicap', 'pas de maladie', 'Houmet souk', 'Accepte', 'pas d handicap', 'Moutalaka', 'pas de maladie','Description beneficiaire test'),
    new BeneficiaireModel('1', '0000001x', 'Trabelsi', 'Samia', '0632352916', ' 9 okace de europe', ' 3 ebtid2i', 'Najar', 3, 'Pas d handicap', 'pas de maladie', 'Houmet souk', 'Accepte', 'pas d handicap', 'Moutalaka', 'pas de maladie','Description beneficiaire test'),
    new BeneficiaireModel('1', '0000001x', 'Trabelsi', 'Samia', '0632352916', ' 9 okace de europe', ' 3 ebtid2i', 'Najar', 3, 'Pas d handicap', 'pas de maladie', 'Houmet souk', 'Accepte', 'pas d handicap', 'Moutalaka', 'pas de maladie','Description beneficiaire test'),
    new BeneficiaireModel('1', '0000001x', 'Trabelsi', 'Samia', '0632352916', ' 9 okace de europe', ' 3 ebtid2i', 'Najar', 3, 'Pas d handicap', 'pas de maladie', 'Houmet souk', 'Accepte', 'pas d handicap', 'Moutalaka', 'pas de maladie','Description beneficiaire test'),
    new BeneficiaireModel('1', '0000001x', 'Trabelsi', 'Samia', '0632352916', ' 9 okace de europe', ' 3 ebtid2i', 'Najar', 3, 'Pas d handicap', 'pas de maladie', 'Houmet souk', 'Accepte', 'pas d handicap', 'Moutalaka', 'pas de maladie','Description beneficiaire test'),
    new BeneficiaireModel('1', '0000001x', 'Trabelsi', 'Samia', '0632352916', ' 9 okace de europe', ' 3 ebtid2i', 'Najar', 3, 'Pas d handicap', 'pas de maladie', 'Houmet souk', 'Accepte', 'pas d handicap', 'Moutalaka', 'pas de maladie','Description beneficiaire test'),
    new BeneficiaireModel('1', '0000001x', 'Trabelsi', 'Samia', '0632352916', ' 9 okace de europe', ' 3 ebtid2i', 'Najar', 3, 'Pas d handicap', 'pas de maladie', 'Houmet souk', 'Accepte', 'pas d handicap', 'Moutalaka', 'pas de maladie','Description beneficiaire test'),
    new BeneficiaireModel('1', '0000001x', 'Trabelsi', 'Samia', '0632352916', ' 9 okace de europe', ' 3 ebtid2i', 'Najar', 3, 'Pas d handicap', 'pas de maladie', 'Houmet souk', 'Accepte', 'pas d handicap', 'Moutalaka', 'pas de maladie','Description beneficiaire test'),
    new BeneficiaireModel('1', '0000001x', 'Trabelsi', 'Samia', '0632352916', ' 9 okace de europe', ' 3 ebtid2i', 'Najar', 3, 'Pas d handicap', 'pas de maladie', 'Houmet souk', 'Accepte', 'pas d handicap', 'Moutalaka', 'pas de maladie','Description beneficiaire test'),
    new BeneficiaireModel('1', '0000001x', 'Trabelsi', 'Samia', '0632352916', ' 9 okace de europe', ' 3 ebtid2i', 'Najar', 3, 'Pas d handicap', 'pas de maladie', 'Houmet souk', 'Accepte', 'pas d handicap', 'Moutalaka', 'pas de maladie','Description beneficiaire test'),
    new BeneficiaireModel('1', '0000001x', 'Trabelsi', 'Samia', '0632352916', ' 9 okace de europe', ' 3 ebtid2i', 'Najar', 3, 'Pas d handicap', 'pas de maladie', 'Houmet souk', 'Accepte', 'pas d handicap', 'Moutalaka', 'pas de maladie','Description beneficiaire test'),
  ]


  getBeneficiaireList() {
    return this.listBeneficiaire;
  }

  getBeneficiaireDetail(cin) {
    this.beneficiaireServiceModel = {
      id: '',
      cin: cin,
      nom: 'AchrafService',
      prenom: 'BakirSerice',
      ville: 'Houmet souk'
    }
    return this.beneficiaireServiceModel;
  }
  constructor() { }

}
