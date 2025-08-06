import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string | null = '';

  constructor(private authService: AuthService, private router: Router) {
    const user = this.authService.currentUserValue;
    this.username = user ? user.username : null;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateToGame(game: string) {
    this.router.navigate([`/${game}`]);
  }
}
