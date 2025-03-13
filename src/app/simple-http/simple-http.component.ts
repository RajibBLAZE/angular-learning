import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css'],
})
export class SimpleHttpComponent implements OnInit {
  postData?: any;  // Holds the fetched post data
  deleteResponse?: any; // Holds the response after deletion
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPost(); // Fetch post when the component loads
  }

  // ✅ Fetch a post before deletion
  getPost(): void {
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => {
        this.postData = data;
        this.loading = false;
      });
  }

  // ✅ Delete the post
  makeDelete(): void {
    this.loading = true;
    this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => {
        this.deleteResponse = data; // Store response from deletion
        this.postData = null; // Clear post data after deletion
        this.loading = false;
      });
  }
}

