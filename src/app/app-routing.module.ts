import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './modules/category-list/category-list.component';

const routes: Routes = [
  // Add a route for the redirect component
  { path: 'categories', component: CategoryListComponent },

  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
