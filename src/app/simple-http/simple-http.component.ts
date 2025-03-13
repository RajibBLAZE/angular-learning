import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css'],
})
export class SimpleHttpComponent implements OnInit {
  data?: Object;
  loading?: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  makePost(): void {
    this.loading = true;
  
    const requestBody = {
      body: 'bar',
      title: 'foo',
      userId: 1
    };
  
    this.http
      .post('https://jsonplaceholder.typicode.com/posts', requestBody) 
      .subscribe((data) => {
        this.data = data;
        this.loading = false;
      });
  }
  
}
