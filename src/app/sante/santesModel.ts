export class SantesModel{

 
  aUnHandicap: string;
	aUneMaladieChronique: string;
  descriptionHandicap : string;
  descriptionMaladieChronique: string;
    
   constructor (aUnHandicap: string, aUneMaladieChronique : string, descriptionHandicap : string, descriptionMaladieChronique : string){    
            this.aUnHandicap =aUnHandicap  ;
            this.aUneMaladieChronique= aUneMaladieChronique ;
            this.descriptionHandicap=  descriptionHandicap ;
            this.descriptionMaladieChronique= descriptionMaladieChronique ;                
           }        
}