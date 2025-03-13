import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validator,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-prac',
  templateUrl: './prac.component.html',
  styleUrls: ['./prac.component.css']
})
export class PracComponent implements OnInit {
  //Create a FormGroup
  requiredForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm();
   }
  //create required field validator for name
  myForm(){
    this.requiredForm = this.fb.group({
      name: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    
  }
  
}
