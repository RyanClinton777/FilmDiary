import { Component, OnInit } from '@angular/core';
import FilmJson from '../../assets/filmlog.json'; //import local JSON file
import { StorageService, Film } from '../services/storage.service'; //storage
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.page.html',
  styleUrls: ['./my-list.page.scss'],
})
export class MyListPage implements OnInit {
  //filmData: any = []; //Array to hold film data //UNCOMMENT TO SHOW DATA FROM JSON
  filmData: Film[] = [];//array to hold movies

  storageService: StorageService;

  constructor(private storage: Storage, storageService: StorageService) { 
    this.storageService = storageService;
    this.loadFilms();
  }  

ngOnInit(): void {
  //console.log(FilmJson); //DISPLAY CONTENTS OF JSON FILE IN CONSOLE FOR DEBUGGING
  //this.filmData = FilmJson.films; //puts contents of local json file into array - UNCOMMENT TO SHOW DATA FROM JSON
}

 //read existing film log
 loadFilms() {
  this.storageService.getFilms().then(films => {
    this.filmData = films;
  });
}
}