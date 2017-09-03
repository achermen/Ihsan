import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoordonneeModel } from './coordonneeModel';
import { CoordonneService } from './coordonne.service';

@Component({
  selector: 'app-coordonnee',
  templateUrl: './coordonnee.component.html',
  styleUrls: ['./coordonnee.component.css']
})
export class CoordonneeComponent implements OnInit {
  constructor(private serviceCoordonnee: CoordonneService, private router: ActivatedRoute) { }
  coordonneeBeneficiaire: CoordonneeModel;
  formCoordonne;
  ngOnInit() {
    //let thisformCoordonne = {};
    let numeroDossier = this.router.snapshot.params['numeroDossier'];
    //this.formCoordonne = this.serviceCoordonnee.getCoordonneeBeneficaireByNumeroDossier(numeroDossier);
    this.coordonneeBeneficiaire = this.serviceCoordonnee.getCoordonneeBeneficaireByNumeroDossier(numeroDossier);
  }

  addCoordonneeBeneficaire(formValue) {
    //  this.beneficiaire = new BeneficiaireModel();
    // this.beneficiaire.cin = formValue.cin;
    // console.info"aaa");
    console.log(formValue);
  }

}
