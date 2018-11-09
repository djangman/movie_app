import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie.service';
import { CategoryService } from './shared/category.service';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    MovieFormComponent,
    MovieListComponent,
    MovieComponent
  ],
  imports: [
	BrowserModule,
	FormsModule,
	StarRatingModule.forRoot()
  ],
  providers: [MovieService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
