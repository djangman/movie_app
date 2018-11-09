export class CategoryService {
	
	private categories: Array<string> = [
		"Action",
		"Mystery",
		"Horror",
		"Comedy"
	];

	getCategories() {
		return this.categories;
	}


}