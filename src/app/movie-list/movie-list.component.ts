import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
	movies: Movie[] = [];
	subscription: Subscription;
	
	constructor( private movieService: MovieService) { }

	ngOnInit() {
		
		this.movies = this.movieService.getMovies();

		// Listen for changes to movie deletions or additions, so that "movies" variable
		// is always up to date    ----------------------
		this.subscription = this.movieService.moviesChanged.subscribe(
			(movies: Movie[]) => {
				this.movies = movies;
			}
      );
	}
	
	// Prevent memory leaks
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
	
}
