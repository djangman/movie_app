import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../shared/category.service';

@Component({
	selector: 'app-movie-form',
	templateUrl: './movie-form.component.html',
	styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
	@ViewChild('mform') movieForm: NgForm;
	categories: Array<string> = [];
	default_category: string = "";
	constructor(private movieService: MovieService,  private categoryService: CategoryService) { }

	ngOnInit() {
		// Prepare array of categories for use by select dropdown in Form
		this.categories = this.categoryService.getCategories();
		this.default_category = "Action";
	}

	onSubmit(form: NgForm) {
		const value = form.value;
		const newMovie = new Movie(value.name, 5, value.category);
		this.movieService.addMovie(newMovie);
		
		form.reset();
	  }

	clearForm() {
		this.movieForm.reset();
	}

}
