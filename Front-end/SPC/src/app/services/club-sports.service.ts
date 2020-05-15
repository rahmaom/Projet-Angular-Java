import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClubSportsService {

  private url="http://localhost:8019/sports";
  private url2="http://localhost:8019/entities_sportifs";
 
  private urle3="http://localhost:8019/allathletes";
  private urle4="http://localhost:8019/athletes";
  
  constructor(private http: HttpClient,) { }

  save(ss){
    return this.http.post<any>(this.url,ss);
  };


  saveAthlète(ss){
    return this.http.post<any>(this.urle4,ss);
  };

  variable;
  getAllentity_sportife_de_clube(id: number){

    this.variable = this.http.get(this.url2+"/"+id);
    console.log(this.variable);
    
    return this.variable;

  }

  allathletes(id:number){
    return this.http.get(this.urle3+"/"+id);
  }


  // addathlet(ss){
  //   return this.http.post<any>(this.urle4,ss);

  // }


  getAthletById(id:number){
    return this.http.get(this.urle4+"/"+id);
  }

// delete(id){
//   return this.http.delete(this.urle4+"/"+id)
// }

delete(id: number) {
  return this.http.delete(`${this.urle4}/${id}`);
}
 
}
