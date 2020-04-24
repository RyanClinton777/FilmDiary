import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular'; //Used to access component props on construction.

@Component({
  selector: 'enter-details-page',
  templateUrl: './enter-details.page.html',
  styleUrls: ['./enter-details.page.scss']
})

export class EnterDetailsPage {

    // Data passed in by componentProps (adapted from official ionic docs)
    @Input() id: string;
    @Input() title: string;
    @Input() year: string;

    constructor(navParams: NavParams) {
      // componentProps can also be accessed at construction time using NavParams
      console.log(navParams.get('title'));
    }
}

