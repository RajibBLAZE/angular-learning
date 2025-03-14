import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  user: { id: string; name: string } = { id: '', name: '' };

  ngOnInit(): void {
    //Get Initial Route Parameters
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    // listening to route Parameter changes
    this.route.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        name: data['name'],
      };
    });
  }
  getRamaDetails() {
    this.router.navigate(['/users', 2, 'Rama'], {
      queryParams: { pages: 1, search: 'leela' },
    });
  }
}
