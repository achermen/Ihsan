import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular-4-data-table';
import { AppComponent } from './app.component';
import { RouterModule, CanActivate } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

// Service.
import { BeneficiaireService } from './beneficiaire.service';
import { CoordonneService } from './coordonnee/coordonne.service';
import { LogementService } from './logement/logement.service';
import { SanteService } from './sante/sante.service';
import { RessourceService } from './ressource/ressource.service';
import { AuthService } from './auth/auth.service';

// Composant
import { CoordonneeComponent } from './coordonnee/coordonnee.component';
import { LogementComponent } from './logement/logement.component';
import { SanteComponent } from './sante/sante.component';
import { RessourceComponent } from './ressource/ressource.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { AuthComponent } from './auth/auth.component';
import { BeneficiaireComponent } from './beneficiaire/beneficiaire.component';
import { AidesComponent } from './aides/aides.component';
import { BeneficiaireListComponent } from './beneficiairelist/data-table-demo3';

@NgModule({
  declarations: [
    AppComponent,
    BeneficiaireComponent,
    AidesComponent,
    BeneficiaireListComponent,
    CoordonneeComponent,
    LogementComponent,
    SanteComponent,
    RessourceComponent,
    NotFoundComponent,
    AuthComponent
  ],
  imports: [
    DataTableModule,
    FormsModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: 'beneficiaireList',
        component: BeneficiaireListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'beneficiaire/:numeroDossier',
        component: BeneficiaireComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'aides',
        component: AidesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'login',
        component: AuthComponent,
        canActivate: [AuthGuard],
      },
      // {
      //   path: '**',
      //   redirectTo: '404',
      // }
    ])
  ],
  providers: [BeneficiaireService, CoordonneService, LogementService, SanteService, RessourceService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
