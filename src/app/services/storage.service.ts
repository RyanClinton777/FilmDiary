import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

//used youtube video as guide: https://www.youtube.com/watch?v=h_IhS8QQjUA
//film interface - id is imdb id, rating is out of 5
export interface Film {
  id: string,
  title: string,
  year: number,
  datewatched: string
  rating: number,
  note: string,
  posterurl: string
}

const KEY = 'film-log';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  addFilm(filmInput: Film): Promise<any> {
    return this.storage.get(KEY).then((filmArr: Film[]) => {
      //make array to begin with
      //if there are any films, check if ours is already there
      //if so, add new one to them and return full thing to storage
      if (filmArr) {
        //put input film into the array
        filmArr.push(filmInput);
        return this.storage.set(KEY, [filmInput])
      }
      //else just add this to new one, return to storage
      else {
        return this.storage.set(KEY, [filmInput])
      }
    });
  }
  //get films from storage
  getFilms(): Promise<Film[]> {
    return this.storage.get(KEY);
  }

  //Debug
  test() {
    console.log("TESTING ACCESS");
  }
}
