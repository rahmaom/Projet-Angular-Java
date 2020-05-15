import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private _http:HttpClient, private router:Router) { }
  getToken(user: any){
    return this._http.post("http://localhost:8019/api/authenticate",user);
 }
 public isAuthenticated(): boolean {
  const token = localStorage.getItem('jwt');
  if(token!=undefined){      
    return true;
  }
  return false;
}

logout(){ 
  this.isAuthenticated = null;
  // this.user = null;
  localStorage.clear();
  localStorage.removeItem("jwt");

  this.router.navigate(['/loggin']);

}
}
