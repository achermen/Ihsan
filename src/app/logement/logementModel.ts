
export class LogementModel{
    typeLogement : string;
    montant: number;
    nombreChambre: number;
    eclairage: string;
    eauPotable: string;   
   

constructor (typeLogement: string, montant : number, nombreChambre : number, eclairage : string , eauPotable : string){    
            this.typeLogement =typeLogement  ;
            this.montant= montant ;
            this.nombreChambre=  nombreChambre ;
            this.eclairage= eclairage ;             
            this.eauPotable=  eauPotable;      
           }
}