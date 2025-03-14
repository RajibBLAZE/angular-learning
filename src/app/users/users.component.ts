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
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(data =>{
      console.log(data);
    })
    this.route.fragment.subscribe(data =>{
      console.log(data);
    })
  }
  getRamaDetails() {
    this.router.navigate(['/users', 2, 'Rama'], {
      queryParams: { pages: 2, search: 'Rama' },
      fragment: 'loading',
    });
  }
}
