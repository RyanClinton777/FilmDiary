import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchFilmPageRoutingModule } from './search-film-routing.module';

import { SearchFilmPage } from './search-film.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchFilmPageRoutingModule
  ],
  declarations: [SearchFilmPage]
})
export class SearchFilmPageModule {}
