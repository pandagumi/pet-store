import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';
import { CategoriesService } from '../../services/categories.service'

@Component({
  selector: 'app-categories-featured',
  templateUrl: './categories-featured.component.html',
  styleUrls: ['./categories-featured.component.scss']
})
export class CategoriesFeaturedComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  categories: Category[] = [];
  

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void{
    this.categoriesService.getCategories()
    .subscribe(response => {
      this.categories = response;
    });
  }
}
