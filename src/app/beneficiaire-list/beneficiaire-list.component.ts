import { Component, OnInit } from '@angular/core';
import {BeneficiaireModel} from './beneficiaireModel';
import {BeneficiaireService} from './../beneficiaire.service'
import {Router} from "@angular/router";


@Component({
  selector: 'app-beneficiaire-list',
  templateUrl: './beneficiaire-list.component.html',
  styleUrls: ['./beneficiaire-list.component.css']
})
export class BeneficiaireListComponent implements OnInit {
  listBeneficiaire : BeneficiaireModel[];
  beneificiaireList =["Achraf", "Mehdi", "Hamdi"];
  newBeneficiaire = "default value";
  pushBeneficiaire = function(){
  	if(this.newBeneficiaire != ""){
  		this.beneificiaireList.push(this.newBeneficiaire);
  		this.newBeneficiaire ="";
  	}
  }

onSelectLigne(benef){
  console.log(benef.id);
  this.router.navigate(['/beneficiaire',benef.id]);
}

  removeBeneficiaire = function(index){
    console.log(index);
   this.beneificiaireList.splice(index,1);
  }

  constructor(private serviceBeneficiaire : BeneficiaireService
    ,private router: Router
    ) { }

  ngOnInit() {
   // this.listBeneficiaire = this.serviceBeneficiaire.getBeneficiaireList();
  }

}
