import { ArrayType } from '@angular/compiler';

export class Sport {
 
    constructor(id:number){
        this.id = id;
    }
    id:  number ;
    nom: String;
    image:String;
    clubs: Entities_sportifs;

}
export class Entities_sportifs {
   
    id:  number ;
    nom: String;
    list_sport:ArrayType;
    
    constructor(id:number){
        this.id = id;
    }
}