import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ChildComponent } from './child/child.component';
import { PracComponent } from './prac/prac.component';
import { HttpClientModule } from '@angular/common/http';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'users', component: UsersComponent},
  {path: 'users/:id/:name', component: UsersComponent},
  {path: 'category', component: CategoryComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ExpenseTrackerComponent,
    TestComponent,
    ExpenseEntryComponent,
    ChildComponent,
    PracComponent,
    SimpleHttpComponent,
    HomeComponent,
    UsersComponent,
    CategoryComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
