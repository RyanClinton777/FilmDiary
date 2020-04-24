import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchFilmPage } from './search-film.page';

describe('SearchFilmPage', () => {
  let component: SearchFilmPage;
  let fixture: ComponentFixture<SearchFilmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
