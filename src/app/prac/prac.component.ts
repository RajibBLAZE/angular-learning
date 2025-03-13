import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-prac',
  templateUrl: './prac.component.html',
  styleUrls: ['./prac.component.css']
})
export class PracComponent implements OnInit {
  userName: string ='';
  formdata: any;
  constructor() { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      userName: new FormControl("RAJIB")
    });
  }
  OnClickedSubmit(data: any){
    console.log(data)
    this.userName = data.userName;
  }
}
