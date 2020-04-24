import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchFilmPage } from './search-film.page';

const routes: Routes = [
  {
    path: '',
    component: SearchFilmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchFilmPageRoutingModule {}
