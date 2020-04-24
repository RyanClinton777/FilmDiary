import { Component, OnInit } from '@angular/core';
import ArticleJson from '../../assets/filmlog.json'; //import local JSON file


@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.page.html',
  styleUrls: ['./my-list.page.scss'],
})
export class MyListPage implements OnInit {
  filmData: any = []; //Array to hold film data

  constructor() { 
    console.log('Reading local json file...'); //PRINT FOR DEBUGGING
  }  

ngOnInit(): void {
  console.log(ArticleJson); //DISPLAY CONTENTS OF JSON FILE IN CONSOLE FOR DEBUGGING
  this.filmData = ArticleJson; //puts contents of local json file into array
  }
}