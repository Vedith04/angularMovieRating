import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesapiService {

  constructor(private http:HttpClient) { }
  popular(){
    return this.http.get("http://localhost:3000/popular-movies");
  }
  theatre(){
    return this.http.get("http://localhost:3000/theatre-movies");
  }
  trend(){
    return this.http.get("http://localhost:3000/trending-movies");
  }
}
