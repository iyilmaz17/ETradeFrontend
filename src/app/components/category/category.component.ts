import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryResponseModel } from 'src/app/models/categoryResponseModel';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  category: Category[] = [];
  apiUrl = 'https://localhost:44339/api/Categories/getall';

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.aa();
  }

  aa() {
    this.httpClient
      .get<CategoryResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.category = response.data;
        console.log(this.category)
      });
  }
}
