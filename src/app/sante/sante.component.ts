import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SantesModel } from './santesModel';
import { SanteService } from './sante.service';

@Component({
  selector: 'app-sante',
  templateUrl: './sante.component.html',
  styleUrls: ['./sante.component.css']
})
export class SanteComponent implements OnInit {
  santeBeneficaire: SantesModel;
  constructor(private serviceSante: SanteService, private router: ActivatedRoute) { }
  ngOnInit() {
    let numeroDossier = this.router.snapshot.params['numeroDossier'];
    this.santeBeneficaire = this.serviceSante.getSanteBeneficaireByNumeroDossier(numeroDossier);
  }
}
