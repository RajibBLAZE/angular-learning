import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prac',
  templateUrl: './prac.component.html',
  styleUrls: ['./prac.component.css']
})
export class PracComponent implements OnInit {
  username: string = '';
  constructor() { }

  ngOnInit(): void {
  }


  OnClickedSubmit(result: string) {
    console.log("You have entered:", result);
  }
}
