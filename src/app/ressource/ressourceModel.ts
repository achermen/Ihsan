
export class RessourceModel{
    typeRessource : string;
    montant: number;
    descriptionRessource: string;
   
   //console.log("aaa") ;
constructor (typeRessource: string, montant : number, descriptionRessource : string ){    
            this.typeRessource =typeRessource  ;
            this.montant= montant ;
            this.descriptionRessource=  descriptionRessource ;   
            //console.log("hello") ;
           }
}