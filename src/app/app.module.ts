import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
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
import { SearchReviewComponent } from './search-review/search-review.component';

const appRoutes: Routes = [
  {
    path:'',
    component:SearchComponent
  },
  {
    path: 'search',
    component: SearchReviewComponent
  },
  {
    path:'pool-details/:id',
    component:PoolsDetailPageComponent
  },
  {
    path:'pool-details/:id/review',
    component:ReviewPageViewComponent
  },
  {
    path:'guest/signin',
    component:LoginComponent
  },
  {
    path:'host/dashboard',
    component:DashboardComponent
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    RegisterComponent,
    PoolsDetailPageComponent,
    ReviewPageViewComponent,
    DashboardComponent,
    SearchReviewComponent
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
