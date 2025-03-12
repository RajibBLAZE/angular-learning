import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  // testname: string = 'First angular app';
  showData($event: any){
    console.log("button is clicked!");
    if(!$event){
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
