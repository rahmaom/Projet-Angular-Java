import { Sport } from './sport';
export class Athlet {
    
    id?:  number ;
    nom: String;
    age:number;
    prenom:String;
    date_de_naissance:Date;
    image:String;
    sport:Sport;
constructor(nom:String,sport:Sport,age:number,prenom:String,date_de_naissance:Date,image:String){
this.nom=nom;
this.prenom=prenom;
this.date_de_naissance=date_de_naissance;
this.image=image;
this.age=age;
this.sport=sport;
}
}

