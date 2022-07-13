import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MoviesapiService} from 'src/app/services/moviesapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api:MoviesapiService,private router:Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  trendMovies:any;
  getTrendingMovies(){
    this.api.trend().subscribe((res:any)=>{
      this.trendMovies=res;
    })
  }

  theatreMovies:any;
  getTheatreMovies(){
    this.api.theatre().subscribe((res:any)=>{
      this.theatreMovies=res;
    })
  }

  popularMovies:any;
  getPopularMovies(){
    this.api.popular().subscribe((res:any)=>{
      this.popularMovies=res;
    })
  }

  goToMovie(type:string,id:string){
    if(type=='trending'){
      this.router.navigate(['movie',type,id]);
    }
    if(type=='theatre'){
      this.router.navigate(['movie',type,id]);
    }
    if(type=='popular'){
      this.router.navigate(['movie',type,id]);
    }
  }
}
