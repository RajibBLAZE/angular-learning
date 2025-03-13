import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ChildComponent } from './child/child.component';
import { PracComponent } from './prac/prac.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseTrackerComponent,
    TestComponent,
    ExpenseEntryComponent,
    ChildComponent,
    PracComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
