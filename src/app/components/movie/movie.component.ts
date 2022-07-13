import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesapiService } from 'src/app/services/moviesapi.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private route:ActivatedRoute,private api:MoviesapiService) { }
  id='';
  type='';
  movie:any;
  movies:any=[];

  ngOnInit(): void {
    this.type=this.route.snapshot.params['type'];
    this.id=this.route.snapshot.params['id'];
    this.getMovie();
    let ind=this.movies.findIndex((res: { id: string; })=>res.id==this.id);
    this.movie=this.movies[ind];
  }
  getMovie(){
    if(this.type=='trending'){
      this.api.trend().subscribe((res)=>{
        this.movies=res;
        let index=this.movies.findIndex((res: { id: string; })=>res.id==this.id)
        this.movie=this.movies[index];
      });
    }
    if(this.type=='theatre'){
      this.api.theatre().subscribe((res)=>{
        this.movies=res;
        let index=this.movies.findIndex((res: { id: string; })=>res.id==this.id)
        this.movie=this.movies[index];
      });
    }
    if(this.type=='popular'){
      this.api.popular().subscribe((res)=>{
        this.movies=res;
        let index=this.movies.findIndex((res: { id: string; })=>res.id==this.id)
        this.movie=this.movies[index];
      });
    }
   
  }
}
