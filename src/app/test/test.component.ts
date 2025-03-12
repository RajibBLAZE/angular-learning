import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-test',
  template: ` 
    <div> 
    <ng-template ngFor let-item [ngForOf]="Fruits" let-i="index"> 
    <p>{{i}}</p> 
    </ng-template> 
    </div>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  Fruits = ["mango","apple","orange","grapes"];
  constructor() { }

  ngOnInit(): void {
  }

}
