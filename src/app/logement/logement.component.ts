import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogementModel } from './logementModel';
import { LogementService } from './logement.service';

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent implements OnInit {
  logementBeneficiaire: LogementModel;
  constructor(private serviceLogement: LogementService, private router: ActivatedRoute) { }

  ngOnInit() {
    let numeroDossier = this.router.snapshot.params['numeroDossier'];
    this.logementBeneficiaire = this.serviceLogement.getLogementBeneficiaireByNumeroDossier(numeroDossier);
  }
  
  addLogementBeneficaire(formValue) {
    console.log(formValue);
    //this.serviceLogement.addLogementBeneficaire(formValue);
  }
}
