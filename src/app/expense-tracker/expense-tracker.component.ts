import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent implements OnInit {
  title: string = '';
  constructor() { }

  ngOnInit(): void {
    this.title = 'Expense Tracker'
  }

}
