import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoordonneeComponent } from './../coordonnee/coordonnee.component';
import { LogementComponent } from './../logement/logement.component';

import { BeneficiaireService } from './../beneficiaire.service';
import { BeneficiaireModel } from './../beneficiaire-list/beneficiaireModel';


@Component({
  selector: 'app-beneficiere',
  templateUrl: './beneficiaire.component.html',
  styleUrls: ['./beneficiaire.component.css']
})
export class BeneficiaireComponent implements OnInit {
  parentTitle: string = "This is a title";
   getParentTitle(): string {
    return "get " + "aaaaaa";
}

  beneficiaireModel = {
    id: '1',
    nom: 'Khayri',
    prenom: 'Mohsen',
    dateNaissance: '22/01/1990'
  };
  paramsSubscription: string;
  beneficiaire: BeneficiaireModel;
  beneficiaireService;
  ressourceModele = ['aide oncle', 'aide association', 'aide etat'];
  isTrue = true;

  constructor(private serviceBeneficiaire: BeneficiaireService, private route: ActivatedRoute) { }

  ngOnInit() {
    let numeroDossier = this.route.snapshot.params['numeroDossier'];
    this.beneficiaire = this.serviceBeneficiaire.getBeneficiaireDetail(numeroDossier);
  }

  addBeneficaire(formValue) {
    //  this.beneficiaire = new BeneficiaireModel();
    // this.beneficiaire.cin = formValue.cin;
    console.info(formValue);
  }
}
