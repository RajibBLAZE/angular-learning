import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }
  user: { id: string; name: string } = { id: '', name: '' };

  ngOnInit(): void {
    this.user = {
      id: this.router.snapshot.params['id'],
      name: this.router.snapshot.params['name']
    }
  }
  

}
