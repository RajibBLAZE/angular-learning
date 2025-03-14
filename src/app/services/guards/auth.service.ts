export class AuthService {
    private isLoggedIn = false; // Keep this private to prevent direct modification
  
    login() {
      this.isLoggedIn = true;
    }
  
    logout() {
      this.isLoggedIn = false;
    }
  
    isAuthenticated(): boolean {
      return this.isLoggedIn;
    }
  }
  