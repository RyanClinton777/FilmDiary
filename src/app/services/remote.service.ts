import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Gives access to functions in HttpClientModule
import { Observable } from 'rxjs'; //httpclient.get returns Observable objects

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  constructor(private http: HttpClient) { }

  //takes name of film as string, returns search results as Observable object
  SearchFilm(name:String):Observable<any> {
    return this.http.get('https://www.omdbapi.com/?apikey=2d21296c&s='+name); //returns Observable
  }

}
