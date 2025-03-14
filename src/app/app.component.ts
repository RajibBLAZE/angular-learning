import { Component } from '@angular/core';
import { AuthService } from './services/guards/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app-latest';
  constructor(public authService: AuthService){
  }
  onLoginClick(){
    this.authService.login();
  }
  onLogoutClick(){
    this.authService.logout();
  }
    
}
