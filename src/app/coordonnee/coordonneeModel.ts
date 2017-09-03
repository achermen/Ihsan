
export class CoordonneeModel{
    numeroDossier : string;
    cin: string;
    nom: string;
    prenom: string;
    //dateDeNaissaice: 
    telephone: string;
    adresse: string;
    niveauD_etude: string;
    profession: string;
    nombreMembreFamille: number;
    //DateCreationDossier

    ville : string;
    etatDossier : string;   
    etatCivil : string;

   

constructor (numeroDossier: string, cin : string, nom : string, prenom:string , telephone:string, adresse: string
             ,niveauD_etude: string, profession: string, nombreMembreFamille: number, 
             descriptionMaladieChronique:string, ville : string, etatDossier : string, etatCivil : string){
     
            this.numeroDossier =numeroDossier  ;
            this.cin= cin ;
            this.nom=  nom ;
            this.prenom= prenom ;
            //this.dateDeNaissaice=dateDeNaissaice;
            this.telephone=  telephone;
            this.adresse= adresse ;
            this.niveauD_etude= niveauD_etude;
            this.profession= profession ;
            this.nombreMembreFamille= nombreMembreFamille;
           // this.dateCreationDossier = dateCreationDossier;
            this.ville = ville;
            this.etatDossier = etatDossier;
            this.etatCivil = etatCivil;
           }
}