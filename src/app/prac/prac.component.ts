import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-prac',
  templateUrl: './prac.component.html',
  styleUrls: ['./prac.component.css']
})
export class PracComponent implements OnInit {
  //create a form
  EmailRequiredForm!: FormGroup;
  constructor(private fb: FormBuilder){
    this.emailForm();
  }
  
  emailForm(){
    this.EmailRequiredForm = this.fb.group({ 
      email: ['', [Validators.required,  
              Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ] 
      });

  }
  ngOnInit() {
    
  }
  
}
