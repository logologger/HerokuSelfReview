import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { PoolsDetailPageComponent } from './pools-detail-page/pools-detail-page.component';
import { ReviewPageViewComponent } from './review-page-view/review-page-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path:'',
    component:SearchComponent
  },
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LoginComponent,
    SearchComponent,
    RegisterComponent,
    PoolsDetailPageComponent,
    ReviewPageViewComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
