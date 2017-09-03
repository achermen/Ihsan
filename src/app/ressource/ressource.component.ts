import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RessourceModel } from './ressourceModel';
import { RessourceService } from './ressource.service';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {
  ressourceBeneficaire: RessourceModel;
  constructor(private serviceRessource: RessourceService, private router: ActivatedRoute) { }
  ngOnInit() {
    let numeroDossier = this.router.snapshot.params['numeroDossier'];
    this.ressourceBeneficaire = this.serviceRessource.getRessourceBeneficaireByNumeroDossier(numeroDossier);
  }

  addRessourceBeneficaire(formValue){
    console.log(formValue);
  }

}
