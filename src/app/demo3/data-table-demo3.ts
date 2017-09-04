import { Component, ViewChild } from '@angular/core';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-4-data-table';
import { beneficiaires } from './data-table-demo3-data';
import { Router } from '@angular/router';
import { BeneficiaireService } from './../beneficiaire.service';

@Component({
    selector: 'data-table-demo-3',
    templateUrl: 'data-table-demo3.html',
    styleUrls: ['data-table-demo3.css']
})
export class DataTableDemo3 {

    // filmResource = new DataTableResource(beneficiaires);
    filmResource = new DataTableResource(this.serviceBeneficiaire.getBeneficiaireList());
    beneficiaires = [];
    beneficiaireCount = 0;

    @ViewChild(DataTable) filmsTable;

    btnDetailClicked(benef) {
        console.log(benef.cin);
        this.router.navigate(['/beneficiaire', benef.cin]);
    }

    constructor(private router: Router, private serviceBeneficiaire: BeneficiaireService) {
        this.filmResource.count().then(count => this.beneficiaireCount = count);
    }

    reloadBeneficiaires(params) {
        this.filmResource.query(params).then(beneficiaires => this.beneficiaires = beneficiaires);
    }

    cellColor(car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
    };

    // special params:

    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
    };
}
