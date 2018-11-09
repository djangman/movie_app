import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { CategoryService } from '../shared/category.service';

@Component({
	selector: 'app-movie',
	templateUrl: './movie.component.html',
	styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
	categories: Array<string> = [];
	@Input() movie: Movie;
	@Input() index: number;

	constructor(private movieService: MovieService,  private categoryService: CategoryService) { }

	ngOnInit() {
		// Prepare array of categories for use by select dropdowns for each Movie
		this.categories = this.categoryService.getCategories();
	}
	
	onDeleteMovie(id) {
		this.movieService.deleteMovie(id);
	}
	

}
