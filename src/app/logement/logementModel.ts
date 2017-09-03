
export class LogementModel{
    typeLogement : string;
    montant: number;
    nombreChambre: number;
    eclairage: string;
    eauPotable: string;
    autreBesoin:string;   
   

constructor (typeLogement: string, montant : number, nombreChambre : number, eclairage : string , eauPotable : string, autreBesoin: string){    
            this.typeLogement =typeLogement  ;
            this.montant= montant ;
            this.nombreChambre=  nombreChambre ;
            this.eclairage= eclairage ;             
            this.eauPotable=  eauPotable;      
            this.autreBesoin= autreBesoin;
           }
}