import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router:Router) { }

  auth(username:any,password:any){
    if(username=='vedith' && password=='12345678'){
      return true;
    }
    return false;
  }

  logout(){
    this.router.navigate(['login']);
  }
}
