import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'; //
import { RemoteService } from '../services/remote.service'; //import our service for using API
import { AfterViewInit, ElementRef} from '@angular/core'; //for event listener



@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.page.html',
  styleUrls: ['./add-film.page.scss'],
})
export class AddFilmPage implements OnInit {
  filmData: any = []; //will hold data about films
  input:String = ""; //user input, to use in search
  filmID:String; //holds ID of the film the user selects

  constructor(private storage: Storage, private service: RemoteService) { }

  ngOnInit() {}

  //search for films using name inputted by user
  search() {
    //make sure input not empty
    if (this.input == "") return;

    console.log("INPUT: "+this.input);
    //Use RemoteService to put input into API and get results
    this.service.SearchFilm(this.input).subscribe((data)=>{
      this.filmData = data.Search;
    });
  }

  select(str: String) {
    console.log("Selected film with ID: "+str);
    this.filmID = str; //store the ID
  }

}
