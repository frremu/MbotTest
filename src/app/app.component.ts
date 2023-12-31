import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MbotTest';
  categories: any[] = [];

  constructor(private http: HttpClient) {}



  ngOnInit() {


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
