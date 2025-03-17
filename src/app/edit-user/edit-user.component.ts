import { Component, OnInit } from '@angular/core';
import { IDeactivateGuard } from './../services/guards/deactivate-guard.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit, IDeactivateGuard {
  user: { id: string; name: string } = { id: '', name: '' };
  editUserDetails: { id: string; name: string } = { id: '', name: '' };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        name: data['name'],
      };
      this.editUserDetails = { ...this.user };
    });
  }
  canExit(): boolean {
    console.log(this.user);
    console.log(this.editUserDetails);
    if (
      this.editUserDetails.id !== this.user.id ||
      this.editUserDetails.name !== this.user.name
    ){
      if (confirm('All changes will be lost if you change the page')) {
        return true;
      }
      else{
        return false;
      }
    }
      
    return false;
  }
}
