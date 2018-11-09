import { Subject } from 'rxjs';

import { Movie } from './movie.model';

export class MovieService {
	
	moviesChanged: Subject<Movie[]> = new Subject<Movie[]>();

	private movies: Movie[] = [
		//new Movie("movie1", 5, "Horror"),
		//new Movie("movie3", 4, "Mystery")

	];

	deleteMovie(index: number) {
		this.movies.splice(index,1);
		this.moviesChanged.next(this.movies.slice());
	}


	getMovies() {
		return this.movies.slice();
	}

	addMovie(movie: Movie) {
		this.movies.push(movie);
		this.moviesChanged.next(this.movies.slice());
	} 

}