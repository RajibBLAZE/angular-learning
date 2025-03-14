import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
    console.log('User logged in');
  }

  logout() {
    this.isLoggedIn = false;
    console.log('User logged out');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}

