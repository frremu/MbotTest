import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PanelModule } from 'primeng/panel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './modules/category-list/category-list.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    PanelModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
