import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthService } from './services/guards/auth.service';

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
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './services/guards/auth-guard.service';


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
    UserComponent,
    PageNotFoundComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    AppRoutingModule
    
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
