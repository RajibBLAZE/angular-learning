import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  user: { id: string; name: string } = { id: '', name: '' };

  ngOnInit(): void {
    //Get Initial Route Parameters
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // listening to route Parameter changes
    this.route.params.subscribe((data: Params )=> {
      this.user = {
        id: data['id'],
        name: data['name'],
      }
    });
  }
  

}
