import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'; //
import { RemoteService } from '../services/remote.service'; //import our service for using API
import { ModalController } from '@ionic/angular'; //control Modal
import { EnterDetailsPage } from '../modals/enter-details/enter-details.page'; //modal page

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.page.html',
  styleUrls: ['./add-film.page.scss'],
})
export class AddFilmPage implements OnInit {
  filmData: any = []; //will hold data about films
  input:String = ""; //user input, to use in search

  constructor(private storage: Storage, private service: RemoteService, public modalController: ModalController ) { }

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

  //takes in ID, title and year of the movie that is selected in the list, opens a modal where the user can enter their diary entry for it.
  select(ID: String, title:String, year:String, poster:String) {
    //open modal with the details for this movie, allow user to enter personalised ones
    this.presentModal(ID, title, year, poster);
  }

    //Adapted from ionic docs
  async presentModal(ID: String, title:String, year:String, poster:String) {
    //component props are how we pass in data to the modal - 'VarName': 'Data'
    const modal = await this.modalController.create({
      component: EnterDetailsPage,
      componentProps: {
        'id': ID,
        'title': title,
        'year': year
      }
    });
    return await modal.present();
  }

    //Adapted from ionic docs
  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}//end of class
