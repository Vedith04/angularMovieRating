import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthenticationService,private route:Router) { }

  ngOnInit(): void {
  }

  loginForm:FormGroup=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+[A-Z]*[0-9]*$')  ]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  login(){
    console.log(this.loginForm.value);
    if(this.auth.auth(this.loginForm.controls['username'].value,this.loginForm.controls['password'].value)){
      this.route.navigate(['home']);
    }
    else{
      alert('Invalid Credentials');
      this.route.navigate(['login']);
    }
  }

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }
}
