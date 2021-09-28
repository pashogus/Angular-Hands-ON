import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isAuthenticated:Boolean=false;

  login(userName:string , password:string):Boolean
  {
    console.log("inside login");
    this.isAuthenticated=userName=='admin' && password=='admin';
    localStorage.setItem("isAuthenticated",this.isAuthenticated?"true":"false");
    
      return this.isAuthenticated;
   
  }

}
