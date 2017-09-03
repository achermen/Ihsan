
export class RessourceModel{
    typeRessource : string;
    montantRessource: number;
    descriptionRessource: string;
   
   //console.log("aaa") ;
constructor (typeRessource: string, montantRessource : number, descriptionRessource : string ){    
            this.typeRessource =typeRessource  ;
            this.montantRessource= montantRessource ;
            this.descriptionRessource=  descriptionRessource ;   
            //console.log("hello") ;
           }
}