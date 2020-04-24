import { Component, OnInit } from '@angular/core';
import FilmJson from '../../assets/filmlog.json'; //import local JSON file
import { Storage } from '@ionic/storage'; //

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.page.html',
  styleUrls: ['./my-list.page.scss'],
})
export class MyListPage implements OnInit {
  filmData: any = []; //Array to hold film data

  constructor(private storage: Storage) { 
    console.log('Reading local json file...'); //PRINT FOR DEBUGGING
  }  

ngOnInit(): void {
  console.log(FilmJson); //DISPLAY CONTENTS OF JSON FILE IN CONSOLE FOR DEBUGGING

  //this.storage.forEach() {

  //}

  this.filmData = FilmJson.films; //puts contents of local json file into array
}
}