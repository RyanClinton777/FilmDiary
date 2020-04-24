import { Component, Input, ViewChild, Injectable } from '@angular/core';
import { NavParams, Platform, ModalController } from '@ionic/angular'; //NavParams Used to access component props on construction, platform for checking storage
import { StorageService, Film } from '../../services/storage.service'; //storage
import { AddFilmPage } from 'src/app/add-film/add-film.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'enter-details-page',
  templateUrl: './enter-details.page.html',
  styleUrls: ['./enter-details.page.scss']
})
//Don't know what this doesn, just trying anything to get it working
@Injectable({
  providedIn: 'root'
})
export class EnterDetailsPage {

    // Data passed in by componentProps (adapted from official ionic docs)
    @Input() id: string;
    @Input() title: string;
    @Input() year: string;
    //variables
    date:string;
    rating:number;
    note:string;

    films: Film[] = [];//array to hold movies
    newFilm: Film = <Film>{}; //new film to be added

    modalController: ModalController;
    storageService: StorageService;

    //pass in storage and platform for storga, navparams for modal control
    constructor(storageService: StorageService, private plt: Platform, navParams: NavParams, modalController: ModalController, storage: Storage) {
      //assign to variable so it can be accessed from methods - I don't think you are stupposed to have to do this but they come back undefined, even though I can access the methods through autocomplete so obviously the pathing is right. Don't get it.
      this.modalController = modalController;
      this.storageService = storageService;

      //make sure platform is ready
      this.plt.ready().then(() => {
        //load films
        this.loadFilms();
      });
      
      // componentProps can also be accessed at construction time using NavParams
      console.log(navParams.get('title'));
    }

    //Attempts to add a diary entry to storage with the given values
    submit() {
      //print to console (debugging)
      console.log(this.id);
      console.log(this.title);
      console.log(this.year);
      console.log(this.date);
      console.log(this.rating);
      console.log(this.note);

      //add values to new film "object"
      this.newFilm.id = this.id;
      this.newFilm.title = this.title;
      this.newFilm.year = parseInt(this.year);
      this.newFilm.datewatched = this.date;
      this.newFilm.rating = this.rating;
      this.newFilm.note = this.note;

      this.storageService.test();

      //add to storage
      this.storageService.addFilm(this.newFilm).then(film => {
        this.newFilm = <Film>{};
      });

      //dismiss this modal
      this.modalController.dismiss();
    }//end method
    
    //read existing film log
    loadFilms() {
      this.storageService.getFilms().then(films => {
        this.films = films;
      });

    }

}

