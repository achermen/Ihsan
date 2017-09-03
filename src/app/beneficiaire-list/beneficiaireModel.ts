
export class BeneficiaireModel{

    numeroDossier : string;
	cin: string;
    nom: string;
    prenom: string;
    //dateDeNaissaice
    telephone: string;
    adresse: string;
    niveauD_etude: string;
    profession: string;
    nombreMembreFamille: number;
    descriptionHandicap: string;
    descriptionMaladieChronique: string;
    //DateCreationDossier

   ville : string;
   etatDossier : string;
   typeHandicap : string;
   etatCivil : string;
   typeMaladieChronique : string;



constructor (numeroDossier: string, cin : string, nom : string, prenom:string , telephone:string, adresse: string
	         ,niveauD_etude: string, profession: string, nombreMembreFamille: number,  descriptionHandicap: string,
	         descriptionMaladieChronique:string, 
			 ville : string,
		     etatDossier : string,
			 typeHandicap : string,
			 etatCivil : string,
		     typeMaladieChronique : string
	         ){
	 
 
    this.numeroDossier =numeroDossier  ;
	this.cin= cin ;
    this.nom=  nom ;
    this.prenom= prenom ;
    //this.dateDeNaissaice=dateDeNaissaice;
    this.telephone=  telephone;
    this.adresse= adresse ;
    this.niveauD_etude= niveauD_etude ;
    this.profession= profession   ;
    this.nombreMembreFamille= nombreMembreFamille ;
    this.descriptionHandicap=descriptionHandicap ;
    this.descriptionMaladieChronique= descriptionMaladieChronique;
   // this.dateCreationDossier = dateCreationDossier;
    this.ville = ville;
    this.etatDossier = etatDossier;
	this.typeHandicap = typeHandicap;
	this.etatCivil = etatCivil;
	this.typeMaladieChronique =typeMaladieChronique;
}
}