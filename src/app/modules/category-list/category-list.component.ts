import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, first, map, throwError } from 'rxjs';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  categories: any[] = [];
  userValue = {
    id: '6515680d1b2f53574fb9b1aa',
    firstName: 'Admin',
    lastName: 'Admin',
    userName: 'admin',
    token:
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhZG1pbiIsIm5iZiI6MTcwMTA2OTMwNSwiZXhwIjoxNzAxMDk0NTA1LCJpYXQiOjE3MDEwNjkzMDV9.D8MVNkMQhjriruLhCWU204In9vMKlO-YPgjA6J4k46JRKvdLdEXyESnZAa40yE1nDq7fOBosabW9NGtCxn70Kw',
    role: 'Admin',
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const token = this.userValue?.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

      this.http
      .get<any>('assets/mockup/product-registration.json')
      .pipe(first())
      .subscribe((data) => {
        this.categories = data.categories
      });
  }

  add() {
    // this.router.navigate(['../category']);
  }

  update(category: any) {
    // this.categoryService.setCategory(category);
    // this.router.navigate(['../category']);
  }

  delete(categoryId: string) {
    // const categoryName = this.categories.find(x => x.id == categoryId)?.name;
    // this.isCategoryForm = false;
    // this.showDeleteConfirmation({ id: categoryId, name: categoryName });
  }
}
