import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router,private auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  gotohome(){
    this.route.navigate(['home']);
  }

  logout(){
    this.auth.logout();
  }
}
