import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent} from './app.component';
import { BeneficiaireComponent } from './beneficiaire/beneficiaire.component';
import { AidesComponent } from './aides/aides.component';
import { RouterModule} from '@angular/router';
import { BeneficiaireListComponent } from './Beneficiaire-list/Beneficiaire-list.component';

// Service.
import { BeneficiaireService } from './beneficiaire.service';
import {CoordonneService} from './coordonnee/coordonne.service';
import {LogementService} from './logement/logement.service';
import {SanteService} from './sante/sante.service';
import {RessourceService} from './ressource/ressource.service';


import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular-4-data-table';
import { DataTableDemo1 } from './demo1/data-table-demo1';
import { DataTableDemo2 } from './demo2/data-table-demo2';
import { DataTableDemo3 } from './demo3/data-table-demo3';
import { DataTableDemo1Remote } from './demo1/data-table-demo1-remote';
import { CoordonneeComponent } from './coordonnee/coordonnee.component';
import { LogementComponent } from './logement/logement.component';
import { SanteComponent } from './sante/sante.component';
import { RessourceComponent } from './ressource/ressource.component';
@NgModule({
  declarations: [
    AppComponent,
    BeneficiaireComponent,
    AidesComponent,
    BeneficiaireListComponent,
    DataTableDemo1Remote,
    DataTableDemo1,
    DataTableDemo2,
    DataTableDemo3, CoordonneeComponent, LogementComponent, SanteComponent, RessourceComponent],
  imports: [
    DataTableModule,
    FormsModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
       {
        path: 'DataTable1',
        component: DataTableDemo1
      },
      {
        path: 'DataTable2',
        component: DataTableDemo2
      },
       {
        path: 'DataTable3',
        component: DataTableDemo3
      },
      {
        path: 'beneficiaireList',
        component: BeneficiaireListComponent
      },
      {
        path: 'beneficiaire/:numeroDossier',
        component: BeneficiaireComponent
      },
      {
        path: 'aides',
        component: AidesComponent
      }
    ])
  ],
  providers: [BeneficiaireService, CoordonneService, LogementService, SanteService, RessourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
