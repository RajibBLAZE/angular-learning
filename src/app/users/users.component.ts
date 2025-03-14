import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  usersData = ['Rama', 'Krishna', 'Leela'];
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onCategoriesClick() {
    //perform some logic
    //navigate to page

    this.router.navigate(['/category']);
  }

  onUserAddedClick() {
    
  }
}