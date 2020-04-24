import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Gives access to functions in HttpClientModule
import { Observable } from 'rxjs'; //httpclient.get returns Observable objects

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  constructor(private http: HttpClient){}

//Gets data from local JSON file
  getLocalData() {
    return this.http.get("/assets/filmlog.json"); //returns Observable
  }

  getRemoteData() {
    return this.http.get("/assets/filmlog.json"); //returns Observable
  }

}
