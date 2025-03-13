import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css'],
})
export class SimpleHttpComponent {
  data?: any;

  constructor(private http: HttpClient) {}

  makeHeaders(): void {
    const headers: HttpHeaders = new HttpHeaders({
      'X-API-TOKEN': 'ng-book'
    });

    const req = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        headers: headers
      }
    );

    this.http.request(req).subscribe((response: any) => {
      this.data = response['body'];
    });
  }
}


